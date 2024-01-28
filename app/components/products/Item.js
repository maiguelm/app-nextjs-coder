import Image from "next/image";
import Link from "next/link";
import React from "react";
import QtrSelector from "./QtrSelector";

const Item = ({ item }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="bg-slate-300 border-solid border-slate-400 border-2 rounded flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold pt-2">{item.nombre}</h1>
      <h3 className="text-lg font-medium font">$ {item.precio}</h3>
      <h4 className="text-base">{capitalizeFirstLetter(item.categoria)}</h4>
	  
      <Link href={`/products/detail/${item.slug}`}>
        <Image
          alt={item.nombre}
          src={`/images/${item.imagen}`}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <p className="container m-auto max-w-max p-2 hover:text-slate-500">Leer más</p>
      </Link>
      <QtrSelector item={item} />
    </div>
  );
};

export default Item;
