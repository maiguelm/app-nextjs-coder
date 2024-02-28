import { useContext } from "react"
// import { CartContext } from "@/components/context/cartContext"
import { AuthContext } from "@/components/context/AuthContext"

// export const useCartContextProvider = () => {
// 	return useContext(CartContext)
// }

export const useAuthContextProvider = () =>{
	return useContext(AuthContext)
}