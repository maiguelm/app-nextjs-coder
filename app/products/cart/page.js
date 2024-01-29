import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import React from "react";

const Cart = ({ item }) => {
  return (
    <section className="">
      <Image src={'/wallpaper.jpg'} alt='item.nombre' width={300} height={300} />
      <h3>Nombre del Producto en el carrito</h3>
      <p className="">$ (precio de los items del carrito)</p>
      <Button> Comprar </Button>
    </section>
  );
};

export default Cart;
