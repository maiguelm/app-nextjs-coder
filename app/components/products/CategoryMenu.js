import Link from "next/link";
import React from "react";

const links = [
	{
		label: 'Todos',
		href: '/products/todos'
	},
	{
		label: 'Viennosieries',
		href: '/products/viennosieries'
	},
	{
		label: 'Masitas',
		href: '/products/masitas'
	},
	{
		label: 'Postres',
		href: '/products/postres'
	},
]

const CategoryMenu = () => {
    return ( 
		<aside>
			{links.map(link =>(
				<Link
					className="text-base font-bold text-slate-900 p-4 flex gap-4"
					key={link.label}
					href={link.href}>
					{link.label}
				</Link>
			)
			)}
		</aside>
	)
};

export default CategoryMenu;
