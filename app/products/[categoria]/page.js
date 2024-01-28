import CategoryMenu from '@/app/components/products/CategoryMenu'
import { ItemList } from '@/app/components/products/ItemList'
import React from 'react'


export async function generateMetadata({params, searchParams}, parent) {
	return{
		title: `Lemonies Pasteleria Artesanal: ${params.categoria}`
	}
}


const Products = ({ params }) => {
	const { categoria } = params

  	return (
		<main className='container m-auto'>
			<h2 className='text-3xl p-4 border-b-4'>Nuestras Delicias!!!!</h2>

			<div className='flex gap-8'> 
				<ItemList categoria={categoria} />
				<CategoryMenu />

			</div>

		</main>
  	)
}

export default Products