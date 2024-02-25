'use client'
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useAuthContextProvider } from "@/hooks/hooks";
import Link from "next/link";

const AuthPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const { user, loginUser } = useAuthContextProvider();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(values);
    } catch (error) {
      setError("Usuario y/o contraseña incorrecta");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <h2 className="text-3xl text-center font-bold mb-4">Inicio de sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
              value={values.password}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-center items-center">
            <Button type="submit" className="w-44">Iniciar sesión</Button>
          </div>
        </form>
      </div>
      <p className="mt-4">¿No tienes una cuenta? <Link href="/register" className="text-blue-500">Regístrate aquí</Link></p>
    </div>
  );
};

export default AuthPage;