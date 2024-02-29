// 'use client'
// import { useAuthContextProvider, useCartContextProvider } from "@/hooks/hooks"
// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "../ui/Button"

// export function CheckoutOrder(){

// 	const { cart, total } = useCartContextProvider()
// 	const { user } = useAuthContextProvider
// 	const [nroOrden, setNroOrden] = useState(false)
// 	const [id, setId] = useState("")


// 	const onSubmit = (data, e) => {

// 		function getRandom() {
// 			return Math.trunc(Math.random() * 10000) * 100;
// 		}
// 		const order = {
// 			user: {
// 				nombre: user.name,
// 				email: user.email
// 			},
// 			products: cart,
// 			total: total,
// 			date: serverTimestamp(),
// 			nroOrder: getRandom(),
// 		}

// 		const ordersCollection = collection(db, "compras")
// 		const queryOrder = addDoc(ordersCollection, order)

// 		queryOrder
// 			.then((docRef) => {
// 				setNroOrden(order.nroOrder)
// 				setId(docRef.id)
// 			})
// 			.catch((error) => {
// 				console.log(error)
// 				error(error)
// 			})


// 	}

// 	return (
// 		<>
// 			<div>
// 				<form onSubmit={onSubmit}>
// 					<Button>Comprar</Button>
// 				</form>
// 			</div>
// 			<div>
// 				{id ? <h1>Orden generada con exito, su compra fue registrada con el número: {nroOrden}</h1> : null}
// 			</div>
// 			<div>
// 				{id ? <h3>Para seguir comprando haga click <Link href="/products/todos">aqui</Link></h3> : null}
// 			</div>

// 		</>
// 	)
// }

export function CheckoutOrder(){
	return(
		<div> CHeckout page</div>
	)
}