"use client";
import { useState } from "react";
import { Button } from "../ui/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://${process.env.VERCEL_URL}/api/contact`, {
        method: "POST",
        body: JSON.stringify(formData), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      e.target.reset();
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Nombre:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="name"
              name="name"
              type="text"
              placeholder="Nombre"
              value={formData.name}
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
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-lg font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="message"
            >
              Mensaje:
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="message"
              name="message"
              placeholder="Deje su mensaje!"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
