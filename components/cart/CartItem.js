import { useContext, useCallback } from "react";
import { useCartContextProvider } from "@/hooks/hooks";
import { Button } from "../ui/Button";
import Image from "next/image";

const CartItem = ({ item }) => {
  const {
    agregaProdUnidad,
    removerProducto,
    borrarProducto
  } = useCartContextProvider();

  const handleAddUnit = useCallback(() => {
    agregaProdUnidad(item.slug);
  }, [agregaProdUnidad, item.slug]);

  const handleRemoveUnit = useCallback(() => {
    removerProducto(item.slug);
  }, [removerProducto, item.slug]);

  const handleDeleteItem = useCallback(() => {
    borrarProducto(item.slug);
  }, [borrarProducto, item.slug]);

  return (
    <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
      <Image src={item.imagen} alt={item.nombre} width={80} height={80} />
      <div>
        <h3>{item.nombre}</h3>
        <p className="text-sm font-semibold">${item.precio * item.cantidad}</p>
        <p className="text-sm">Cantidad: {item.cantidad}</p>
        <Button className='p-2 w-10 font-bold' onClick={handleAddUnit}>+</Button>
        <Button className='p-2 w-10 font-bold'onClick={handleRemoveUnit}>-</Button>
      </div>

      <Button onClick={handleDeleteItem} className="bg-red-600">
        X
      </Button>
    </li>
  );
};

export default CartItem;