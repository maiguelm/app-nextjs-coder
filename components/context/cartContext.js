'use client'
import React from "react"
import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()
const { Provider } = CartContext

export function ContextCartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        const storageCart = JSON.parse(localStorage.getItem("cart"));
        const storageCantidad = parseInt(localStorage.getItem("cantidad"));
        const storageTotal = parseFloat(localStorage.getItem("precioFinal"));

        setCart(storageCart);
        setCantidadTotal(storageCantidad);
        setTotal(storageTotal);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cantidad", cantidadTotal.toString());
        localStorage.setItem("precioFinal", total.toString());
    }, [cart, cantidadTotal, total]);

    const vaciarCarrito = () => {
        setCart([]);
        setTotal(0);
        setCantidadTotal(0);
    };

    const borrarProducto = (slug) => {
        const updatedCart = cart.filter((producto) => producto.slug !== slug);
        setCart(updatedCart);
        setCantidadTotal(updatedCart.length);
    };

    const agregarProducto = (item, quanty) => {
        const existe = cart.find((productoCarrito) => productoCarrito.slug === item.slug);
        if (existe) {
            setCart(cart.map((p) => {
                if (p.slug === item.slug) {
                    return { ...existe, quanty: existe.quanty + quanty };
                } else return p;
            }));
            
            let suma = cantidadTotal + quanty;
            setCantidadTotal(suma);
            let totalProducto = item.precio * quanty;
            setTotal(total + totalProducto);
        } else {
            setCart([
                ...cart,
                { ...item, quanty }
            ]);
            console.log(quanty)
          let totalProducto = item.precio * quanty;
          setTotal(total + totalProducto);
          let suma = cantidadTotal + quanty;
          setCantidadTotal(suma);
        }
      };
    
    

    const removerProducto = (slug) => {
        const index = cart.findIndex((prod) => prod.slug === slug);

        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index].cantidad = Math.max(1, updatedCart[index].cantidad - 1);
            setCart(updatedCart);
            setCantidadTotal(cantidadTotal - 1);
        }
    };

    const agregaProdUnidad = (slug) => {
        const index = cart.findIndex((prod) => prod.slug === slug);

        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index].cantidad += 1;
            setCart(updatedCart);
            setCantidadTotal(cantidadTotal + 1);
        }
    };

    const calculoPrecio = () => {
        const precioFinal = cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
        setTotal(precioFinal);
        return precioFinal
    };

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }


    const ContextValue = {
        productos: cart,
        total: total,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarProducto: borrarProducto,
        calculoPrecio: calculoPrecio,
        removerProducto: removerProducto,
        agregaProdUnidad: agregaProdUnidad,
        totalQty: totalQty
    }

    return (
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
}
