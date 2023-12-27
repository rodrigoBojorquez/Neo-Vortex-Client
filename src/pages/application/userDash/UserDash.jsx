import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import Footer from "../../../components/Footer";
import Table from "./components/Tabla_Docs";
import CardsDash from "./components/CardsDash";
import CardDocs from "./components/CardsDocs";

// ASSETS
import { FaPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import doc from "../../../assets/img/doc.png";

function UserDash() {
  const iconSize = "4rem";
  const data = [
    { id: 1, name: "Titulo del doc 1", date: "24/12/2023", imagen: doc },
    { id: 2, name: "Titulo del doc 2", date: "25/12/2023", imagen: doc },
    { id: 3, name: "Titulo del doc 3", date: "26/12/2023", imagen: doc },
  ];

  const handleNewDoc = () => {
    console.log("nuevo documento");
  };

  const handleImportDoc = () => {
    console.log("importar");
  };

  const handleNewChat = () => {
    console.log("crear otro chat");
  };

  const saveInDropbox = () => {
    console.log("guardar en dropbox");
  };

  return (
    <div>
      <Header />
      <section className="w-full bg-[#4D4C7D] mt-11  flex justify-center items-center">
        <div className="grid grid-cols-2 w-full px-5 md:grid-cols-4 gap-8 md:gap-12 lg:gap-20 max-w-[1000px] mx-auto my-10">
          <button type="button" onClick={handleNewDoc}>
            <CardsDash
              initColor={"#342f54"}
              finColor={"#68679e"}
              icon={<FaPlus size={iconSize} color="white" />}
              title={"Nuevo"}
            />
          </button>

          <button type="button" onClick={handleImportDoc}>
            <CardsDash
              initColor={"#342f54"}
              finColor={"#68679e"}
              icon={<FaUpload size={iconSize} color="white" />}
              title={"Importar"}
            />
          </button>

          <button type="button" onClick={handleNewChat}>
            <CardsDash
              initColor={"#342f54"}
              finColor={"#68679e"}
              icon={<FaRobot size={iconSize} color="white" />}
              title={"Asistente"}
            />
          </button>

          <button type="button" onClick={saveInDropbox}>
            <CardsDash
              initColor={"#342f54"}
              finColor={"#68679e"}
              icon={<FaDropbox size={iconSize} color="white" />}
              title={"Dropbox"}
            />
          </button>
        </div>
      </section>

      <h1 className=" text-3xl font-semibold my-4 ml-4 ">Recientes</h1>

      <section className="w-full mb-6 flex justify-center items-center px-5">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 ">
          {data.map((doc, index) => (
            <CardDocs key={index} name={doc.name} imagen={doc.imagen} />
          ))}
        </div>
      </section>

      <h1 className="text-2xl md:text-3xl font-semibold mt-6 mb-4 ml-4 ">Documentos</h1>

      <div className="px-0 md:px-5">
        <Table data={data} />
      </div>

      <Footer />
    </div>
  );
}

export default UserDash;
