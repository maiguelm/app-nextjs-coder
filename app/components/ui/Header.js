import React from 'react'
import { Brand } from './Brand'
import Links from './Links'


export const Header = () => {
  return (
	<header className='m-auto bg-slate-900 text-white flex justify-around p-4'>
		<Brand />
		<nav className='gap-12 flex items-center'>
			<Links />
		</nav>
	</header>
  )
}
