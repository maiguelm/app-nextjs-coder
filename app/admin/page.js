'use client'
import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl text-center font-bold mb-4">Inicio de sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <Button type="submit" className="w-full">Iniciar sesión</Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
