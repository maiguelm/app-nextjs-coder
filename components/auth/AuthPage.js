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
  const { loginUser, googleLogin } = useAuthContextProvider();

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

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
     }
  }

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
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-lg">Iniciar sesion con Google</p>
            <Button className="bg-slate-400" onClick={handleGoogleLogin}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05c0 5.71-3.83 9.77-9.6 9.77c-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48c-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51z"></path></svg></Button>
          </div>
        </form>
      </div>
      <p className="mt-4">¿No tienes una cuenta? <Link href="/register" className="text-blue-500">Regístrate aquí</Link></p>
    </div>
  );
};

export default AuthPage;