import React from "react";
import Layout from "../Layout";
import unidad_01 from "../../assets/unidad_01.jpeg";
import icono1 from "../../assets/icono1.png";
import icono2 from "../../assets/icono2.png";
import icono3 from "../../assets/icono3.png";
import icono4 from "../../assets/icono4.png";
import icono5 from "../../assets/icono5.png";
import icono6 from "../../assets/icono6.png";
import { Link } from "react-router-dom";

const U00 = () => {
  const services = [
    {
      id: 1,
      titulo: "Este es un ejemplo de un recurso ",
      description:
        "Este es uan descripcio nde los laboratorios que se van a desarrollador correspondientes a los niveles 1 ,2  y 3 ",
      image: { icono1 },
    },
  ];
  return (
    <>
      <Layout />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={unidad_01}
              alt="Unidad 01"
              className="rounded w-full max-w-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-neutralDGreys">
              UNIDAD 01
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brandPrimary">
              Ecuaciones Quimicas
            </h2>
            <p className="text-neutralGrey text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Las ecuaciones químicas usan símbolos y fórmulas para mostrar cómo
              se transforman las sustancias. Deben estar balanceadas, lo que
              significa que el número de átomos de cada elemento debe ser igual
              en ambos lados de la ecuación.
            </p>
          </div>
        </div>
      </div>
      <div
        className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto"
        id="unidad-2"
      >
        <div className=" text-center my-8">
          <h2 className="text-4xl text-neutralDGreys font-semibold mb-2">
            {" "}
            Temas de la unidad{" "}
          </h2>
          <p className="text-neutralDGrey">
            {" "}
            Cultivar respeto por todas las especies.
          </p>
          {/* <div className="my-12 flex flex-wrap justify-between items-center gap-8">
            <img src={icono1} alt="" width="5%" height="5%" />
            <h4 className="text-xl font-bold text-neutralDGrey mb-2 px-2">
              Masa molar y número de Avogadro
            </h4>
            <img src={icono2} alt="" width="5%" height="5%" />
            <img src={icono3} alt="" width="5%" height="5%" />
            <img src={icono4} alt="" width="5%" height="5%" />
            <img src={icono5} alt="" width="5%" height="5%" />
            <img src={icono6} alt="" width="5%" height="5%" />
          </div> */}

          <div className="my-12 flex flex-col items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-6">
              <Link to="/01-masa-molar-numero-avogadro">
                <div className="flex flex-col items-center">
                  <img src={icono1} alt="" className="w-16 h-16 mb-2" />
                  <p className="text-sm font-medium text-center">
                    Masa molar y Número de Avogadro
                  </p>
                </div>
              </Link>
              <div className="flex flex-col items-center">
                <img src={icono2} alt="" className="w-16 h-16 mb-2" />
                <p className="text-sm font-medium text-center">
                  Composición porcentual
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={icono3} alt="" className="w-16 h-16 mb-2" />
                <p className="text-sm font-medium text-center">
                  Fórmula empírica y molecular
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={icono4} alt="" className="w-16 h-16 mb-2" />
                <p className="text-sm font-medium text-center">
                  Número de oxidación
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={icono5} alt="" className="w-16 h-16 mb-2" />
                <p className="text-sm font-medium text-center"></p>
              </div>
              <div className="flex flex-col items-center">
                <img src={icono6} alt="" className="w-16 h-16 mb-2" />
                <p className="text-sm font-medium text-center"></p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGreys font-semibold mb-3">
            {" "}
            Recursos de Apoyo{" "}
          </h2>
          <p className="text-neutralDGrey"> Guiar experimentos fascinantes.</p>
        </div> */}
        {/* Tarjetas  */}
        {/* <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <img className="-ml-5" src={icono1} alt="" />
                </div>
                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                  {service.titulo}
                </h4>
                <p className="text-sm text-neutralDGrey">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default U00;
