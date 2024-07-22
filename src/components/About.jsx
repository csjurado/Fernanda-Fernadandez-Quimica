import React from "react";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";
const About = () => {
  return (
    <div>
      {/* Acerca */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src={banner2}
              alt=""
              width="75%"
              height="75%"
              className="rounded "
            />
          </div>
          <div className=" md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 ">
              El modelo atomico, correspondientes a las primeras ....
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              es simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor (N. del T.
              persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de
              textos especimen.{" "}
            </p>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded  hover:bg-neutralDGrey">
              Leer mas{" "}
            </button>
          </div>
        </div>
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className=" md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 ">
              El modelo atomico, correspondientes a las primeras ....
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              es simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor (N. del T.
              persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de
              textos especimen.{" "}
            </p>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded  hover:bg-neutralDGrey">
              Leer mas{" "}
            </button>
            <div></div>
          </div>
          <img
            src={banner3}
            alt=""
            width="75%"
            height="75%"
            className="rounded "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
