import { useCartContextProvider } from "@/hooks/hooks";
import { Button } from "../ui/Button";
import Image from "next/image";

const CartItem = ({ item }) => {
  const { removerProducto, borrarProducto } = useCartContextProvider();

  return (
    <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
      <Image src={item.imagen} alt={item.nombre} width={80} height={80} />
      <div>
        <h3>{item.nombre}</h3>
        <p className="text-sm font-semibold">${item.precio * item.cantidad}</p>
        <p className="text-sm">Cantidad: {item.cantidad}</p>
      </div>

      <Button onClick={() => borrarProducto(item.slug)} className="bg-red-600">
        X
      </Button>
    </li>
  );
};

export default CartItem