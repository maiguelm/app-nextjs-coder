"use client";
import { useState } from "react";
import { Button } from "./Button";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="container m-auto bg-slate-500">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-8"
      >
        <div className="flex justify-between gap-10">
          <label className="text-lg font-bold">Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between gap-10">
          <label className="text-lg font-bold">Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between gap-10">
          <label className="text-lg font-bold">Mensaje:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-24 bg-slate-900 text-white">
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
