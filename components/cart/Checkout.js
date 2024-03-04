'use client'
import { useAuthContextProvider, useCartContextProvider } from "@/hooks/hooks"
import Link from "next/link"
import { useState } from "react"
import { Button } from "../ui/Button"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase/config"
import Image from "next/image"

export function CheckoutOrder() {

	const { cart, total } = useCartContextProvider()
	const { user } = useAuthContextProvider()
	const [nroOrden, setNroOrden] = useState(null)
	const [id, setId] = useState(null)
	const [formData, setFormData] = useState({
		nombre: '',
		email: '',
		telefono: ''
	});

	console.log(user)

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		// Obtener los valores del formulario
		const formData = new FormData(e.target);
		const nombre = formData.get('nombre');
		const email = formData.get('email');
		const telefono = formData.get('telefono');

		// Verificar que los campos requeridos estén presentes y tengan valores definidos
		if (!nombre || !email || !telefono) {
			console.error("Por favor, completa todos los campos requeridos.");
			return;
		}

		// Generar un número de orden aleatorio
		const nroOrden = Math.floor(Math.random() * 10000);

		try {
			// Construir el objeto de la orden
			const order = {
				user: {
					nombre: nombre,
					email: email,
					telefono: telefono
				},
				products: cart,
				total: total,
				date: serverTimestamp(),
				nroOrder: nroOrden,
			};

			// Guardar la orden en Firestore
			console.log(order)
			const ordersCollection = collection(db, "compras");
			const docRef = await addDoc(ordersCollection, order);

			// Actualizar el estado con el número de orden y el ID del documento
			setNroOrden(nroOrden);
			setId(docRef.id);
		} catch (error) {
			console.error("Error al guardar la orden en Firestore:", error);
		}
	};

	return (
		<>
			<div>
				<h2>Resumen de la compra:</h2>
				<ul className="flex flex-wrap justify-center gap-3">
					{cart.map((item) => (
						<li key={item.slug}>
							<div className="shadow flex flex-col justify-between items-center max-w-min gap-6 p-4 my-4">
								<Image src={item.imagen} alt={item.nombre} width={80} height={80} />
								<h3>{item.nombre}</h3>
								<p className="text-sm font-semibold">${item.precio * item.cantidad}</p>
								<p className="text-sm">Cantidad: {item.cantidad}</p>
							</div>
						</li>
					))}
				</ul>
				<p className="p-3 text-lg font-extrabold">Total: $ {total}</p>
				<form onSubmit={onSubmit}>
					<div className="p-3">
						<label htmlFor="nombre">Nombre:</label>
						<input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />
					</div>
					<div className="p-3">
						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
					</div>
					<div className="p-3">
						<label htmlFor="telefono">Teléfono:</label>
						<input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} required />
					</div>
					<Button type="submit">Confirmar compra</Button>
				</form>
			</div>
			{id && (
				<div>
					<h1>Orden generada con éxito, su compra fue registrada con el número: {nroOrden}</h1>
					<h3>Para seguir comprando haga click <Link href="/products/todos">aquí</Link></h3>
				</div>
			)}
		</>
	);
}
