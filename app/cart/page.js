import CartList from "@/components/cart/CartList";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const Cart = ({ item }) => {
  return (
    <main className="container m-auto">
      <CartList />
    </main>
  );
};

export default Cart;
