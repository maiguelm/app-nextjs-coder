"use client";
import CartItem from "@/components/cart/CartItem";
import { useCartContextProvider } from "@/hooks/hooks";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartList = () => {
  const { cart, calculoPrecio, vaciarCarrito } = useCartContextProvider();
  const router = useRouter();

  console.log(cart);
  return (
    <div>
      <ul>
        {cart.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
              <h2 className="text-3xl text-center font-bold mb-4">
                Tu carrito está vacio
              </h2>
              <Button className='w-full mt-5 font-bold' type='button' onClick={()=> router.back()}>
                Volver
              </Button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
            {cart.map((item) => (
              <CartItem item={item} key={item.slug} />
            ))}
            <p className="text-2xl my-4 border-b pb-4">
              Total: ${calculoPrecio()}
            </p>
            <div>
              <Button onClick={() => vaciarCarrito()}>Vaciar Carrito</Button>
              <Link href={"/cart/checkout"}>
                <Button>Comprar</Button>
              </Link>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default CartList;
