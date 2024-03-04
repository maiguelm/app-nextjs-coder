"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useAuthContextProvider } from "@/hooks/hooks";

const EditProfile = () => {
  const { user } = useAuthContextProvider();
  const router = useRouter();

  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    email: user.email || "",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    birthDate: user.birthDate || "",
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setFormData({
            ...formData,
            displayName: userData.displayName || "",
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            birthDate: userData.birthDate || "",
          });
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    getUserData();
  }, [user.uid]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, formData);
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="displayName"
            >
              Nombre de usuario:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="displayName"
              name="displayName"
              type="text"
              placeholder="Nombre de usuario"
              value={formData.displayName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="firstName"
            >
              Nombre:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="lastName"
            >
              Apellido:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Correo Electrónico:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="email"
              name="email"
              type="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              disabled
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="birthDate"
            >
              Fecha de nacimiento:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="birthDate"
              name="birthDate"
              type="date"
              placeholder="Fecha de nacimiento"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
