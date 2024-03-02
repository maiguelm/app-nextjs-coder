import { NextResponse } from "next/server"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
    const { slug } = params;
    /* const productRef = collection(db, "products");
    const q = query(productRef, where("slug", "==", slug));
    
    try {
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            return NextResponse.error({
                status: 404,
                statusText: "Producto no encontrado en la base de datos.",
            });
        }

        const docData = querySnapshot.docs[0].data();
        const { nombre, precio, descripcion, imagen, cantidad, categoria } = docData;

        const serializedData = {
            nombre,
            precio,
            descripcion,
            imagen, 
            cantidad,
            categoria
        };

        return NextResponse.json(serializedData);
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        return NextResponse.error({
            status: 500,
            statusText: "Error interno del servidor.",
        });
    } */


    const docRef = doc(db, "products", slug)
    const docSnapshot = await getDoc(docRef)

    return NextResponse.json( docSnapshot.data() )

} 