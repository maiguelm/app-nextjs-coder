"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import CartWidget from './CartWidget';

const links = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Nosotros',
    href: '/aboutUs'
  },
  {
    label: 'Contacto',
    href: '/contact'
  },
  {
    label: 'Productos',
    href: '/products/todos'
  },
];

const Links = () => {
	const pathname = usePathname()

  return (
    <>
      {links.map((link) => (
        <Link 
			key={link.label} 
			href={link.href}
			className={`${pathname === link.href ? 'font-bold underline' : ''}`}>
          {link.label}
        </Link>
      ))}
      <CartWidget />
    </>
  );
};

export default Links;
