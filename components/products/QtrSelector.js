"use client";
import { useState } from "react";
import { Counter } from "../ui/Counter";
import { Button } from "../ui/Button";
import { useCartContextProvider } from "@/hooks/hooks";

const QtrSelector = ({ item, className = "" }) => {
  const [quantity, setQuantity] = useState(0);
  const { agregarProducto, totalQty } = useCartContextProvider();

  const handleAdd = () => {
	setQuantity(quantity)
	totalQty(quantity)
    agregarProducto({ ...item, cantidad: quantity });
    console.log(quantity);
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Counter count={quantity} setCount={setQuantity} />
      <Button onClick={handleAdd}>Agregar al carrito</Button>
    </div>
  );
};

export default QtrSelector;
