import React from "react";

// ASSSETS
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

function Contactform() {
  const iconSize = "1.5rem";

  const handleContact = (e) => {
    e.preventDefault();
    console.log("contacto");
  };

  return (
    <form
      onSubmit={handleContact}
      className="bg-white shadow-md rounded-sm p-3 text-sm"
    >
      <h3 className="text-center mb-5 text-2xl">Contactanos</h3>

      <div className="grid grid-cols-2 gap-x-2">
        <div className="input-container relative">
          <BsPerson
            color="#6B7280"
            className="absolute left-2"
            size={iconSize}
          />
          <input type="text" className="input-form pl-9" placeholder="Nombre" />
        </div>
        <div className="input-container relative">
          <input
            type="text"
            className="input-form pl-9"
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

        <input type="email" className="input-form pl-9" placeholder="Email" />
      </div>
      <div className="input-container">
        <select className="input-form"></select>
      </div>
      <div className="input-container">
        <input type="number" className="input-form" />
      </div>
      <div className="input-container">
        <textarea className="input-form resize-none"></textarea>
      </div>
    </form>
  );
}

export default Contactform;
