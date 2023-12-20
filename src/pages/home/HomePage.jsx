import {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Footer from "../../components/Footer";
import Header from "./components/Header";
import Cards from "./components/Cards";
import SideBar from "../../components/SideBar";

// ASSETS
import HomeImg from "../../assets/img/home.jpg";
import Home2 from "../../assets/img/home-big.jpg";
import Home3 from "../../assets/img/home-img.jpg"
import { TbRobotFace } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

function HomePage() {
  const [heightClass, setHeightClass] = useState({})
  const [openSideBar, setOpenSideBar] = useState(false)

  const iconSize = "7rem"
  const styles = {
    strokeWidth: 1.6
  }

  //GET WINDOW DIMENSIONS
  const windowHeight = window.innerHeight
  const headerHeight = useRef(null)

  useEffect(() => {
    if(headerHeight.current) {
      const heigth = headerHeight.current.clientHeight
      const toSet = windowHeight -  heigth
      setHeightClass({height: `${toSet}px`})
    }
  }, [windowHeight])

  return (
    <main className="bg-[#f5f5f5]">
      <div className="h-screen">
        <Header headerHeight={headerHeight} setOpenSideBar={setOpenSideBar}/>

        <article className="py-10 px-24 gap-x-20 flex items-center justify-between relative" style={heightClass}>
          <section className="w-[400px] z-10 text-[#f5f5f5]">
            <h2 className="text-6xl font-semibold mb-5">
              Desata tu creatividad
            </h2>
            <p className="text-xl font-medium mb-10">
              Redacción potenciada por inteligencia artificial, donde cada
              palabra cobra vida
            </p>
            <Link
              className="bg-[#F99417] px-7 py-2 rounded-md text-white font-medium text-lg"
              to={"/app"}
            >
              ¡Pruebalo!
            </Link>
          </section>
          <section className="z-0 absolute top-0 inset-0">
            <img
              src={Home3}
              alt="Home image"
              className="object-cover"
              style={heightClass}
            />
          </section>
        </article>
      </div>

      <article className="px-24">
        <h3 className="text-3xl my-7">Funcionalidades</h3>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10 mb-14">
          <Cards
            initColor={"#342f54"}
            finColor={"#68679e"}
            icon={<TbRobotFace size={iconSize} style={styles} color="#f5f5f5" />}
            title={"Asistente IA"}
            text={"Resuelve tus dudas y obten ideas mediante asistencia de inteligencia artificial"}
          />
          <Cards 
            initColor={"#342f54"}
            finColor={"#68679e"}
            icon={<IoCloudUploadOutline size={iconSize} style={styles} color="#f5f5f5"/>}
            title={"Almancenamiento en la nube"}
            text={"Guarda tus documentos en la nube y accede a ellos desde cualquier dispositivo"}
          />
          <Cards 
            initColor={"#342f54"}
            finColor={"#68679e"}
            icon={<IoDocumentTextOutline size={iconSize} style={styles} color="#f5f5f5" />}
            title={"Texto inteligente"}
            text={"Obten sugerencias de escritura y resume tus textos"}
            />
        </section>
      </article>

      <Footer />

      {openSideBar && (
        <SideBar 
          setOpenSideBar={setOpenSideBar}
        />
      )}
    </main>
  );
}

export default HomePage;
