import React from "react";

const ContactLayout = ({ children }) => {
  return (
    <section className="container m-auto min-h-screen bg-slate-300 rounded">
      <h1 className="p-6 text-center text-2xl font-bold underline text-slate-800">
        Formulario de Contacto
      </h1>
      {children}
    </section>
  );
};

export default ContactLayout;
