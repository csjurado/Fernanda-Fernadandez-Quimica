import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import unidad_01 from "../../assets/unidad_01.jpeg";
import MyFooter from "../../components/MyFooter";

import icono1 from "../../assets/icono1.png";
import youtube from "../../assets/youtube.png";
import prezi from "../../assets/prezi.png";
import phet from "../../assets/phet.png";
import game from "../../assets/game.png";
import quizz from "../../assets/quizz.png";
import liveworksheets from "../../assets/liveworksheets.png";
export const U01 = () => {
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
      <NavBar />
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
              Masa molar y número de Avogadro
            </h2>
            <p className="text-neutralGrey text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
              Comprender y calcular la masa molar de diferentes sustancias
              químicas utilizando el número de Avogadro, y aplicar estos
              conceptos para determinar cantidades de partículas en una muestra.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-14 mx-auto bg-neutralSilver py-16">
        <div className="flex items-center justify-center lg:w-3/5 mx-auto">
          <div className="text-center">
            <h2 className="lg:text-5xl text-3xl text- font-semibold mb-6 lg:leading-snug">
              {" "}
              Recursos digitales para la Unidad 01 <br></br>Masa molar y número
              de Avogadro
            </h2>
          </div>
        </div>
      </div>
      {/* Primer Recurso */}
      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-items-center">
        <div className="lg:col-span-1 md:col-span-2">
          <div className="mt-14 grid  grid-cols-1 w-full md:w-10/12 mx-auto gap-8 justify-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
              >
                <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img className="-ml-5" src={youtube} alt="" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    Video de YouTube:
                  </h4>
                  <p className="text-sm text-neutralDGrey">
                    Observa este video de YouTube y reflexiona sobre el tema.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UoQqglMVW1g?si=VqGtsyAOQXJzfFTc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full md:w-[560px] md:h-[315px] rounded-md shadow"
          ></iframe>
        </div>
      </div>
      {/* Segundo recurso  */}
      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-items-center">
        <div className="lg:col-span-1 md:col-span-2 flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://prezi.com/view/YLHKVhU0KGb6apAw9FeH/ "
            title="Prezi"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full md:w-[560px] md:h-[315px] rounded-md shadow"
          ></iframe>
        </div>
        <div className="lg:col-span-1 md:col-span-2">
          <div className="mt-14 grid  grid-cols-1 w-full md:w-10/12 mx-auto gap-8 justify-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
              >
                <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img className="-ml-5" src={prezi} alt="" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    Diaporama de Prezi:
                  </h4>
                  <p className="text-sm text-neutralDGrey">
                    Explora la presentación interactiva en Prezi. Utiliza las
                    flechas para navegar a través de las diapositivas.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tercer Recurso */}
      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-items-center">
        <div className="lg:col-span-1 md:col-span-2">
          <div className="mt-14 grid  grid-cols-1 w-full md:w-10/12 mx-auto gap-8 justify-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
              >
                <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img className="-ml-5" src={phet} alt="" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    Simulador o Calculadora química:
                  </h4>
                  <p className="text-sm text-neutralDGrey">
                    Utiliza la calculadora química y sigue las instrucciones en
                    pantalla para realizar cálculos químicos del tema.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_all.html?locale=es "
            title="Phet Simulador"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full md:w-[560px] md:h-[315px] rounded-md shadow"
          ></iframe>
        </div>
      </div>
      {/* Cuarto Recurso */}
      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-items-center">
        <div className="lg:col-span-1 md:col-span-2 flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://es.educaplay.com/recursos-educativos/19832371-reacciones_quimicas.html"
            title="Educa Play"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full md:w-[560px] md:h-[315px] rounded-md shadow"
          ></iframe>
        </div>
        <div className="lg:col-span-1 md:col-span-2">
          <div className="mt-14 grid  grid-cols-1 w-full md:w-10/12 mx-auto gap-8 justify-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
              >
                <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img className="-ml-5" src={game} alt="" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    Juego en Educaplay:
                  </h4>
                  <p className="text-sm text-neutralDGrey">
                    Participa en este juego interactivo de Educaplay para
                    reforzar tus conocimientos y trata de alcanzar la puntuación
                    más alta. ¡Éxito!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Quinto Recurso */}
      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-items-center">
        <div className="lg:col-span-1 md:col-span-2">
          <div className="mt-14 grid  grid-cols-1 w-full md:w-10/12 mx-auto gap-8 justify-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
              >
                <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img className="-ml-5" src={quizz} alt="" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    Evaluación en Quizizz:
                  </h4>
                  <p className="text-sm text-neutralDGrey">
                    Realiza la evaluación de Quizizz comprueba tus conocimientos
                    y revisa tus respuestas al final. ¡Buena suerte!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://quizizz.com/embed/quiz/66a7ca5af11a086924697093 "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full md:w-[560px] md:h-[315px] rounded-md shadow"
          ></iframe>
        </div>
      </div>
      {/* Sexto Recurso */}
      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6 justify-items-center">
        <div className="lg:col-span-1 md:col-span-2 flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.liveworksheets.com/es/c?a=c&sr=n&l=hd&i=usdoocu&r=nb&f=dzdczsdn&ms=uz&cd=klwnxpnjjkxlfngnkgpnlxg&mw=hs"
            title="Liveworksheets"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-full md:w-[560px] md:h-[315px] rounded-md shadow"
          ></iframe>
        </div>
        <div className="lg:col-span-1 md:col-span-2">
          <div className="mt-14 grid  grid-cols-1 w-full md:w-10/12 mx-auto gap-8 justify-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
              >
                <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img className="-ml-5" src={liveworksheets} alt="" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    Hoja de trabajo en Liveworksheets:
                  </h4>
                  <p className="text-sm text-neutralDGrey">
                    Completa la hoja de trabajo interactiva de Liveworksheets
                    reafirma tus conocimientos y revisa tus respuestas al final.
                    ¡Mucha suerte!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};
