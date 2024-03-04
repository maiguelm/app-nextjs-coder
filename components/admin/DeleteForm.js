'use client'
import React from 'react';
import { db } from '@/firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';

const deleteProduct = async (slug) => {
	try {
		const productRef = doc(db, "products", slug);
		await deleteDoc(productRef);
		console.log("Documento eliminado correctamente.");
	} catch (error) {
		console.error("Error al eliminar el documento:", error);
	}
};

const DeleteForm = ({ item, slug }) => {
	const router = useRouter()

	const handleDelete = () => {
		deleteProduct(slug)
		router.back()
        router.refresh()
	};

	return (
		<>
			<p>¿Está seguro de eliminar este producto?</p>
			<h1>{item.nombre}</h1>
			<Image
				src={item.imagen}
				alt={item.nombre}
				width={80}
				height={80}
			/>
			<Button onClick={handleDelete}>Eliminar</Button>
		</>
	);
};

export default DeleteForm;
