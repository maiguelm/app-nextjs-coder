import Link from 'next/link'
import React from 'react'
import { ShoppingCart } from 'react-feather'
import { useCartContextProvider } from '@/hooks/hooks'

const CartWidget = () => {
  const value = useCartContextProvider()

  const spanValue = 0

  return (
	<Link
    className='flex flex-col items-center gap-1'
    href= {'/cart'}>
    <ShoppingCart color='white' size={20} />
    <span>{spanValue}</span>
  </Link>
  )
}

export default CartWidget