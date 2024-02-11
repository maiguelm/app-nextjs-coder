// 'use client'
// import { useState, useEffect } from "react";
// import QtrSelector from "@/app/components/products/QtrSelector";
// import { Button } from "@/app/components/ui/Button";
import Card from "@/components/products/Card";
import Image from "next/image";



const ProductDetail = ({ params }) =>{

  const { slug } = params

  return(
    <section className="container m-auto p-8 bg-slate-300 min-h-screen">
      <Card slug={ slug } />
    </section>
  )

}

export default ProductDetail;