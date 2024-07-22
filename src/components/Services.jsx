import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      titulo: "Este es un ejemplo de un recurso ",
      description:
        "Este es uan descripcio nde los laboratorios que se van a desarrollador correspondientes a los niveles 1 ,2  y 3 ",
      image: "/src/assets/icons/icono2.png",
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
          <img
            src="/src/assets/icons/icono1.png"
            alt=""
            width="5%"
            height="5%"
          />
          <img
            src="/src/assets/icons/icono2.png"
            alt=""
            width="5%"
            height="5%"
          />
          <img
            src="/src/assets/icons/icono3.png"
            alt=""
            width="5%"
            height="5%"
          />
          <img
            src="/src/assets/icons/icono4.png"
            alt=""
            width="5%"
            height="5%"
          />
          <img
            src="/src/assets/icons/icono5.png"
            alt=""
            width="5%"
            height="5%"
          />
          <img
            src="/src/assets/icons/icono6.png"
            alt=""
            width="5%"
            height="5%"
          />
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
