import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Footer from "../../components/Footer";
import Header from "./components/Header";

// ASSETS
import HomeImg from "../../assets/img/home.jpg";
import BigImg from "../../assets/img/home-big.jpg";

function HomePage() {
  return (
    <main>
      <div className="min-h-screen">
        <Header />

        <article className="py-10 px-24 gap-x-20 flex items-center justify-between">
          <section className="w-[400px]">
            <h2 className="text-6xl font-semibold mb-5">
              Desata tu creatividad
            </h2>
            <p className="text-xl font-medium mb-10">
              Redacción potenciada por inteligencia artificial, donde cada
              palabra cobra vida
            </p>
            <Link
              className="bg-[#4D4C7D] px-7 py-2 rounded-md text-white font-medium text-lg"
              to={"/app"}
            >
              ¡Pruebalo!
            </Link>
          </section>
          <section className="hidden h-[600px] lg:relative md:block">
            <img src={BigImg} alt="Big image" className="h-[550px] lg:ml-32" />
            <img
              src={HomeImg}
              alt="Home image"
              className="w-[300px] rounded-lg absolute left-0 bottom-0 hidden lg:block"
            />
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}

export default HomePage;
