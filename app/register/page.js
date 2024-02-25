"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useAuthContextProvider } from "@/hooks/hooks";

const RegisterUserPage = () => {
	const [values, setValues] = useState({
		displayName: '',
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		birthDate: '',
	  });

	const { userRegister } = useAuthContextProvider();

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			...values,
			admin: false,
		  }; 
		  userRegister(userData);
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen">
		<div className="w-full max-w-md">
		  <h2 className="text-3xl text-center font-bold mb-4">Registro de Usuario</h2>
		  <form onSubmit={handleSubmit} className="space-y-4">
			<div>
			  <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">Nombre de usuario:</label>
			  <input
				type="text"
				id="displayName"
				value={values.displayName}
				onChange={handleChange}
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				required
			  />
			</div>
			<div>
			  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre:</label>
			  <input
				type="text"
				id="firstName"
				value={values.firstName}
				onChange={handleChange}
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				required
			  />
			</div>
			<div>
			  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido:</label>
			  <input
				type="text"
				id="lastName"
				value={values.lastName}
				onChange={handleChange}
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				required
			  />
			</div>
			<div>
			  <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento:</label>
			  <input
				type="date"
				id="birthDate"
				value={values.birthDate}
				onChange={handleChange}
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				required
			  />
			</div>
			<div>
			  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
			  <input
				type="email"
				id="email"
				value={values.email}
				onChange={handleChange}
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				required
			  />
			</div>
			<div>
			  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
			  <input
				type="password"
				id="password"
				value={values.password}
				onChange={handleChange}
				className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				required
			  />
			</div>
			<Button type="submit" className="w-full">Registrarme</Button>
		  </form>
		</div>
	  </div>
	);
  };

export default RegisterUserPage;
