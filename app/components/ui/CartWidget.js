import Link from 'next/link'
import React from 'react'
import { ShoppingCart } from 'react-feather'

const CartWidget = () => {
  return (
	<Link
    href= {'/products/cart'}>
    <ShoppingCart color='white' size={20} />
  </Link>
  )
}

export default CartWidget