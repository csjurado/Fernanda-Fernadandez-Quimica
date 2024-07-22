import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner1.jpeg";
const Home = () => {
  return (
    <div className="bg-neutralSilver" id="unidad-1">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className=" w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center gap-12  ">
            <div>
              <img
                src={banner1}
                alt=""
                width="70%"
                height="50%"
                className="rounded"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGreys md:w-3/4 leading-snug">
                {" "}
                INTRODUCCIÓN
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  <br></br>
                  Presenteción{" "}
                </span>
                <p className=" text-neutralGrey text-base mb-8 ">
                  Esta Página ha sido creada con el objetivo de proporcionar un
                  objeto de aprendizaje a los estudiantes de Primero de
                  Bachillerato de la asignatura de Química con el fin de que
                  comprendan conceptos básicos como la definición, estados,
                  clasificación, propiedades, composición de la materia y
                  modelos atómicos, incluyendo el modelo mecánico cuántico de la
                  materia a partir del cual los estudiantes podrán realizar
                  ejercicios de configuración electrónica y hallar los números
                  cuánticos.
                </p>
              </h1>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center gap-12  ">
            <div>
              <img
                src={banner1}
                alt=""
                width="70%"
                height="50%"
                className="rounded"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGreys md:w-3/4 leading-snug">
                {" "}
                Inspirar la curiosidad por{" "}
                <span className="text-brandPrimary leading-snug">
                  la vida.{" "}
                </span>
                <p className=" text-neutralGrey text-base mb-8 ">
                  Despertar la pasión por la naturaleza.
                </p>
              </h1>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-center gap-12  ">
            <div>
              <img
                src={banner1}
                alt=""
                width="70%"
                height="50%"
                className="rounded"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGreys md:w-3/4 leading-snug">
                {" "}
                Inspirar la curiosidad por{" "}
                <span className="text-brandPrimary leading-snug">
                  la vida.{" "}
                </span>
                <p className=" text-neutralGrey text-base mb-8 ">
                  Despertar la pasión por la naturaleza.
                </p>
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
