import Link from 'next/link'
import React from 'react'

export default function NotFound(){

  return (
	<>
		<main>
			<h1>Pagina no encontrada</h1>
			<p>Para volver al inicio haz click 
				<Link href={"/"}> aqui</Link>
			</p>

		</main>
	
	</>
  )
}
