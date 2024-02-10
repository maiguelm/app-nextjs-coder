'use client'
import React from "react"
import { createContext, useState, useEffect, useContext } from "react"

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

    const borrarProducto = (id) => {
        const updatedCart = cart.filter((producto) => producto.id !== id);
        setCart(updatedCart);
        setCantidadTotal(updatedCart.length);
    };

    const agregarProducto = (producto, cantidad) => {
        const existe = cart.find((productoCarrito) => productoCarrito.slug === producto.slug);
        if(existe){
            setCart(cart.map((p) => {
                if(p.slug === producto.slug){
                    return{...existe
                    }
                } else return p
            }))
            
            let suma = cantidad + cantidadTotal
            setCantidadTotal(suma)
            setTotal(total + producto.precio * cantidad)
        
        } else{
            setCart([
                ...cart,
                { ...producto, cantidad }
            ])
            setTotal(total + producto.precio * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    }
    

    const removerProducto = (id) => {
        const index = cart.findIndex((prod) => prod.id === id);

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
    };

    const ContextValue = {
        productos: cart,
        total: total,
         vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarProducto: borrarProducto,
        calculoPrecio: calculoPrecio,
        removerProducto: removerProducto,
        agregaProdUnidad: agregaProdUnidad
    }

    return (
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
}
