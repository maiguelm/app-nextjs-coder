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

// const getProductDetail = async (slug) => {
//   const response = await fetch(`http://localhost:3000/api/products/detail/${slug}`, {
//     cache: "no-store",
//   });
//   const data = await response.json();
//   return data;
// };

// const ProductDetail = ({ slug }) => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const data = await getProductDetail(slug);
//       setProduct(data);
//     };
//     fetchProduct();
//   }, [slug]);

//   if (!product) {
//     return <div>Cargando...</div>;
//   }
// return (
//   <section className="container m-auto p-8 bg-slate-300 min-h-screen">
//     <div className="max-w-md m-auto border-black border-solid border-2 rounded flex flex-col items-center gap-4">
//       <h1 className="text-2xl font-semibold pt-4">{product.nombre}</h1>
//       <h2 className="text-lg font-medium font">$ {product.precio}</h2>
//       <p className="text-center text-base">{product.descripcion}</p>
//       <Image
//         alt={product.nombre}
//         src={product.imagen}
//         width={300}
//         height={300}
//         style={{ objectFit: "contain" }}
//       />
//       <QtrSelector className="pb-4 gap-3" item={product} />
//     </div>
//   </section>
// );
// };


