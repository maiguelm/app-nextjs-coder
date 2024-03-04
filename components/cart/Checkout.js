'use client'
import { useAuthContextProvider, useCartContextProvider } from "@/hooks/hooks"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../ui/Button"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase/config"
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CheckoutOrder() {

    const { cart, total, vaciarCarrito } = useCartContextProvider()
    const { user } = useAuthContextProvider()
    const [nroOrden, setNroOrden] = useState(null)
    const [id, setId] = useState(null)
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = async (e) => {
		e.preventDefault();
	
		if (cart.length === 0) {
			toast.error('El carrito está vacío');
			return;
		}
	

        const formData = new FormData(e.target);
        const nombre = formData.get('nombre');
        const email = formData.get('email');
        const telefono = formData.get('telefono');

        if (!nombre || !email || !telefono) {
            console.error("Por favor, completa todos los campos requeridos.");
            return;
        }

        const nroOrden = Math.floor(Math.random() * 10000);

        try {
            const order = {
                user: {
                    nombre: nombre,
                    email: email,
                    telefono: telefono
                },
                products: cart.map(({ nombre, precio, imagen, slug, cantidad }) => ({ nombre, precio, imagen, slug, cantidad })),
                total: total,
                date: serverTimestamp(),
                nroOrder: nroOrden,
            };

            const ordersCollection = collection(db, "compras");
            const docRef = await addDoc(ordersCollection, order);

            setNroOrden(nroOrden);
            setId(docRef.id);

            setFormData({
                nombre: '',
                email: '',
                telefono: ''
            });
            vaciarCarrito()
        } catch (error) {
            console.error("Error al guardar la orden en Firestore:", error);
        }
    };

    return (
        <>
            <div>
                <h2 className="font-bold text-2xl text-center">Resumen de la compra:</h2>
                <ul className="flex flex-wrap justify-center gap-3">
                    {cart.map((item) => (
                        <li key={item.slug}>
                            <div className="shadow-2xl rounded-lg border border-black  flex flex-col justify-between items-center max-w-sm gap-6 p-4 my-4">
                                <Image src={item.imagen} alt={item.nombre} width={80} height={80} />
                                <h3 className="font-bold">{item.nombre}</h3>
                                <p className="text-base font-semibold">${item.precio * item.cantidad}</p>
                                <p className="text-sm">Cantidad: {item.cantidad}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="p-3 text-2xl font-extrabold text-center">Total: $ {total}</p>
                <form className="w-full max-w-md" onSubmit={onSubmit}>
                    <h1 className="text-lg font-bold underline mb-6 text-center">Ingresa tus datos</h1>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="nombre"
                            >
                                Nombre:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="telefono"
                            >
                                Teléfono:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                id="telefono"
                                name="telefono"
                                type="tel"
                                placeholder="Teléfono"
                                value={formData.telefono}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <Button
                                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit"
                            >
                                Confirmar compra
                            </Button>
                        </div>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <Button
                        className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        <Link href="/products/todos">
                            <p>Volver a la página de productos</p>
                        </Link>
                    </Button>
                </div>
            </div>
            {id && (
                <div>
                    <h1>Orden generada con éxito, su compra fue registrada con el número: {nroOrden}</h1>
                </div>
            )}
			<ToastContainer />;
        </>
    );

}
