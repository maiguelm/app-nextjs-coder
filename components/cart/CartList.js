"use client"
import CartItem from "@/components/cart/CartItem"
import { useCartContextProvider } from "@/hooks/hooks"
import { Button } from "../ui/Button"
import Link from "next/link"


const CartList = () => {
    const { productos, calculoPrecio, vaciarCarrito } = useCartContextProvider()

    console.log(productos)
    return (
<div>
    <ul>
        {productos.length === 0 ? (
            <h2>Carrito Vacio</h2>
        ) : (
            <>
                <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
                {productos.map((item) => (
                    <CartItem item={item} key={item.slug} />
                ))}
                <p className="text-2xl my-4 border-b pb-4">Total: ${calculoPrecio()}</p>
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
    )
}

export default CartList