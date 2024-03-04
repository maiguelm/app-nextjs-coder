'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { db, storage } from "@/firebase/config"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { Button } from "../ui/Button"
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const updateProduct = async (slug, values, file) => {
    let fileURL = values.imagen

    if (file) {
        const storageRef = ref(storage, slug) 
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)
    }

    const docRef = slug ? doc(db, "products", slug) : null;


    return updateDoc(docRef, {
        nombre: values.nombre,
        descripcion: values.descripcion,
        cantidad: values.cantidad,
        precio: values.precio,
        categoria: values.categoria,
        imagen: fileURL,
       }).then(() => toast('Producto editado existosamente'))
}

const EditForm = ({ item, slug }) => {
    const { nombre, descripcion, cantidad, precio, categoria, imagen } = item
    const [values, setValues] = useState({ nombre, descripcion, cantidad, precio, categoria, imagen })
    const [file, setFile] = useState(null)
    const router = useRouter()

    console.log(slug)

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFile(e.target.files[0]);
        } else {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateProduct(slug, values, file)
        router.push("/products/admin")
        router.refresh() 
    }

    return (
        <>
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.nombre}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="nombre"
                    onChange={handleChange}
                />
                <label>Slug: </label>
                <input
                    type="text"
                    value={slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.precio}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="precio"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.cantidad}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="cantidad"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.categoria}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="categoria"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.descripcion}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="descripcion"
                    onChange={handleChange}
                />

                <Button type="submit">Modificar</Button>
                <Link href="/products/admin">
                    <Button>Cancelar</Button>
                </Link>
            </form>
        </div>
        <ToastContainer />
        </>
    )
}

export default EditForm
