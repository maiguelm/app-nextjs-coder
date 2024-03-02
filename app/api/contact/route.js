import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request){
	const formData = await request.json()
	const formDB = collection(db, 'contact')
	const sendForm = addDoc(formDB, formData)


	console.log(formData)

	return NextResponse.json("Mensaje enviado")
 }