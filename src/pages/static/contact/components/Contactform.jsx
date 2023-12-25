import React from "react";

// ASSSETS
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

function Contactform() {
  const iconSize = "1.5rem";

  const handleContact = (e) => {
    e.preventDefault();
    console.log("contacto");
  };

  const contactOptions = [
    { name: "Problemas técnicos", value: "technical-issues" },
    { name: "Cuentas y acceso", value: "accounts-access" },
    { name: "Productos/Servicios", value: "products" },
    { name: "Comentarios y sugerencias", value: "comments" },
    { name: "Problemas específicos del usuario", value: "specific-issues" },
  ];

  return (
    <form
      onSubmit={handleContact}
      className="bg-white shadow-md rounded-sm p-3 text-sm"
    >
      <h3 className="text-center mb-5 text-2xl">Contactanos</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-5 mb-1">
        <section>
          <div className="grid grid-cols-2 gap-x-2">
            <div className="input-container relative">
              <BsPerson
                color="#6B7280"
                className="absolute left-2"
                size={iconSize}
              />
              <input
                type="text"
                className="input-form pl-9"
                placeholder="Nombre"
              />
            </div>
            <div className="input-container relative">
              <input
                type="text"
                className="input-form"
                placeholder="Apellidos"
              />
            </div>
          </div>
          <div className="input-container relative">
            <CiMail
              color="#6b7280"
              className="absolute left-2"
              size={iconSize}
            />
            <input
              type="email"
              className="input-form pl-9"
              placeholder="Email"
            />
          </div>
          <div className="input-container relative">
            <GoQuestion
              color="#6b7280"
              className="absolute left-2"
              size={"1.4rem"}
            />
            <select className="input-form pl-9 pr-3">
              <option value="" selected disabled>
                Tipo de duda
              </option>
              {contactOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className="input-container relative">
            <HiOutlineDevicePhoneMobile
              color="#6b7280"
              className="absolute left-2"
              size={"1.2rem"}
            />
            <input
              type="number"
              className="input-form pl-9"
              placeholder="Número telefónico"
            />
          </div>
        </section>
        <div className="input-container">
          <textarea
            className="input-form resize-none vortex-scroll h-full"
            placeholder="Comentario"
          />
        </div>
      </div>

      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
}

export default Contactform;
