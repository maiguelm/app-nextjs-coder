import { NextResponse } from "next/server";
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from "@/app/firebase/config"


export async function GET(request, {params}){
	const {categoria} = params

	const productsRef = collection(db, "products")
	const cons = categoria === 'todos' ? productsRef : query(productsRef, where('categoria','==', categoria))

	const querySnapshot = await getDocs(cons)

	const docs = querySnapshot.docs.map(doc => doc.data())

	return NextResponse.json(docs)

 }