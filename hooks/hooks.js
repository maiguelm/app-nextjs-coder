import { useContext, useState } from "react"
import { CartContext } from "@/components/context/cartContext"

export const useCartContextProvider = () => {
	return useContext(CartContext)
}
/* 
export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
	  try {
		const cart = window.localStorage.getItem(key);
		return cart ? JSON.parse(cart) : initialValue;
	  } catch (error) {
		console.log(error);
		return initialValue;
	  }
	});
  
	const setValue = (value, valueFunction) => {
	  try {
		const valueToStore = valueFunction ? valueFunction(storedValue) : value;
		setStoredValue(valueToStore);
		window.localStorage.setItem(key, JSON.stringify(valueToStore));
	  } catch (error) {
		console.log(error);
	  }
	};
  
	return [storedValue, setValue];
  }; */
