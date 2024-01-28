'use client'

import { useState } from "react"
import { Counter } from "../ui/Counter";
import { Button } from "../ui/Button";

const QtrSelector = ({ item }) => {
	const [quanty, setQuanty] = useState(0);

	const handleAdd = () =>{
		console.log({
			...item,
			quanty
		})
	}
	console.log(item)



  return (
	<div className="flex flex-col items-center justify-center">
		<Counter max={item.stock} counter={quanty} setCounter={setQuanty} />
		<Button onClick={handleAdd}>Agregar al carrito</Button>
	</div>
  )
}

export default QtrSelector