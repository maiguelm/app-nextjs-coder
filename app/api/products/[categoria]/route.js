import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function GET(request, {params}){
	const {categoria} = params

	const productsRef = collection(db, "products")
	const cons = categoria === 'todos' ? productsRef : query(productsRef, where('categoria','==', categoria))

	const querySnapshot = await getDocs(cons)

	const docs = querySnapshot.docs.map(doc => doc.data())

	return NextResponse.json(docs)

 }


