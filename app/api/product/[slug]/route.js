import { NextResponse } from "next/server";
import { doc, getDoc, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export async function GET({ params }) {
  const { slug } = params;

  const docRef = doc(db, "products");
  const q = query(docRef, where("nombre", "==", slug));

  const docSnapshot = await getDoc(q);

  if (docSnapshot.exists()) {
    const productData = docSnapshot.data();
    return NextResponse.json(productData);
  } else {
    return NextResponse.error({
      status: 404,
      statusText: "Producto no encontrado en la base de datos.",
    });
  }
}
