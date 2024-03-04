'use client'
import React from "react"
import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()
const { Provider } = CartContext

export function ContextCartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        const storageCart = JSON.parse(localStorage.getItem("cart"));
        const storageTotal = parseFloat(localStorage.getItem("precioFinal"));
    
        if(storageCart?.length > 0){
                const cleanedCart = storageCart.map(item => {
                const { quanty, ...rest } = item;
                return rest;
            });
            setCart(cleanedCart);
            setTotal(storageTotal);
        } 
      }, []);
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("precioFinal", total.toString());
      }, [cart, total]);


    const vaciarCarrito = () => {
        setCart([]);
        setTotal(0);
    };

    const borrarProducto = (slug) => {
        const updatedCart = cart.filter((producto) => producto.slug !== slug);
        setCart(updatedCart);
    };

    const agregarProducto = (item, quanty) => {
        const existe = cart.find((productoCarrito) => productoCarrito.slug === item.slug);
        if (existe) {
            setCart(cart.map((p) => {
                if (p.slug === item.slug) {
                    return { ...existe, quanty: existe.quanty + quanty };
                } else return p;
            }));
            
            let totalProducto = item.precio * quanty;
            setTotal(total + totalProducto);
        } else {
            setCart([
                ...cart,
                { ...item, quanty }
            ]);

          let totalProducto = item.precio * quanty;
          setTotal(total + totalProducto);
        }
      };
    
    

    const removerProducto = (slug) => {
        const index = cart.findIndex((prod) => prod.slug === slug);

        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index].cantidad = Math.max(1, updatedCart[index].cantidad - 1);
            setCart(updatedCart);
        }
    };

    const agregaProdUnidad = (slug) => {
        const index = cart.findIndex((prod) => prod.slug === slug);

        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index].cantidad += 1;
            setCart(updatedCart);
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
        cart: cart,
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
