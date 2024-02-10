import { useContext } from "react"
import { CartContext } from "@/components/context/cartContext"

export const useCartContextProvider = () => {
	return useContext(CartContext)
}