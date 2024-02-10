import { Facebook, Instagram, Twitch } from 'react-feather';


function Footer() {
	return (
		<footer className='p-10 bg-slate-900 text-white flex justify-around items-center'>
			<p className='container text-center'> Todos los derechos reservados</p>
			
			<ul className="container m-auto flex justify-center gap-4">
				<li>Seguinos en nuestras redes</li>
				<a href="https://www.facebook.com/"><Facebook size={30} color='blue' /></a>
				<a href="https://www.instagram.com/"><Instagram size={30} color='blue'/></a>
				<a href="https://twitch.com"><Twitch size={30} color='blue'/></a>
			</ul>
		</footer>
	)
}

export default Footer