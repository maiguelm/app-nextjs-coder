import Link from "next/link";
import React from "react";

const links = [
	{
		label: 'Todos',
		href: '/products/todos'
	},
	{
		label: 'Viennoiseries',
		href: '/products/Viennoiseries'
	},
	{
		label: 'Masitas',
		href: '/products/Masitas'
	},
	{
		label: 'Postres',
		href: '/products/Postres'
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
