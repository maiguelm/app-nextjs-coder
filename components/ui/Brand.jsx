import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const Brand = () => {
  return (
    <>
      <Link href={"/"}>
          <Image 
            className='rounded-md'
            src={'/logo.jpg'} 
            alt='Logo de Lemonies'
            width={60}
            height={60}
            priority={true} />
      </Link>
    </>
  )
}
