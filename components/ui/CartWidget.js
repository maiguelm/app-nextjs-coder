import Link from 'next/link'
import React from 'react'
import { ShoppingCart } from 'react-feather'
import { useCartContextProvider } from '@/hooks/hooks'

const CartWidget = () => {
  const value = useCartContextProvider()

  return (
	<Link
    href= {'/products/cart'}>
    <ShoppingCart color='white' size={20} />
    <span>{value.productos.length}</span>
  </Link>
  )
}

export default CartWidget