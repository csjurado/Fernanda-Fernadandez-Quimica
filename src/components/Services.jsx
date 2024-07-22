import React from "react";
import icono1 from "../assets/icono1.png";
import icono2 from "../assets/icono2.png";
import icono3 from "../assets/icono3.png";
import icono4 from "../assets/icono4.png";
import icono5 from "../assets/icono5.png";
import icono6 from "../assets/icono6.png";

import { GiAtom } from "react-icons/gi";
const Services = () => {
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
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="unidad-2">
      <div className=" text-center my-8">
        <h2 className="text-4xl text-neutralDGreys font-semibold mb-2">
          {" "}
          Temas de la unidad{" "}
        </h2>
        <p className="text-neutralDGrey">
          {" "}
          Cultivar respeto por todas las especies.
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <GiAtom />
          <img src={icono1} alt="" width="5%" height="5%" />
          <img src={icono2} alt="" width="5%" height="5%" />
          <img src={icono3} alt="" width="5%" height="5%" />
          <img src={icono4} alt="" width="5%" height="5%" />
          <img src={icono5} alt="" width="5%" height="5%" />
          <img src={icono6} alt="" width="5%" height="5%" />
        </div>
      </div>
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGreys font-semibold mb-3">
          {" "}
          Recursos de Apoyo{" "}
        </h2>
        <p className="text-neutralDGrey"> Guiar experimentos fascinantes.</p>
      </div>
      {/* Tarjetas  */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img className="-ml-5" src={service.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.titulo}
              </h4>
              <p className="text-sm text-neutralDGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
