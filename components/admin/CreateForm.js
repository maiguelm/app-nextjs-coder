'use client'
import { useState } from "react"
import { Button } from "../ui/Button"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase/config"


const createProd = async(values) =>{
	const docRef = doc(db, 'products', values.slug)
	return setDoc(docRef, {...values}).then(()=>console.log("Producto agregado existosamente"))
}

const CreateForm = () => {
	const [values, setValues] = useState({
		nombre: '',
		categoria: '',
		precio: 0,
		cantidad: 0,
		descripcion: '',
		slug: '',
	})

	const handleAddProduct = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createProd(values);
		setValues({
			nombre: '',
			categoria: '',
			precio: 0,
			cantidad: 0,
			descripcion: '',
			slug: '',
		});
	};
	

	return (
		<div className="flex justify-center">
			<form className="w-full max-w-md" onSubmit={handleSubmit}>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="nombre"
						>
							Nombre del producto:
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
							name="nombre"
							type="text"
							placeholder="Nombre del producto"
							value={values.nombre}
							onChange={handleAddProduct}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="text"
						>
							Categoria
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
							name="categoria"
							type="categoria"
							placeholder="Categoria"
							value={values.categoria}
							onChange={handleAddProduct}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="description"
						>
							Descripcion
						</label>
					</div>
					<div className="md:w-2/3">
						<textarea
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
							name="descripcion"
							placeholder="Descripcion del producto"
							rows="4"
							value={values.descripcion}
							onChange={handleAddProduct}
						></textarea>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="price"
						>
							Precio
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
							type="number"
							name="precio"
							value={values.precio}
							onChange={handleAddProduct}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="stock"
						>
							Stock o cantidad
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
							type="number"
							name="cantidad"
							placeholder="Stock o cantidad"
							value={values.cantidad}
							onChange={handleAddProduct}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center mb-6">
					<div className="md:w-1/3">
						<label
							className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="description"
						>
							Slug
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
							type="text"
							name="slug"
							placeholder="Slug"
							value={values.slug}
							onChange={handleAddProduct}
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
							Agregar
						</Button>
					</div>
				</div>
			</form>
		</div>
	);

}

export default CreateForm 