import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="px-4 lg:px-14 mx-auto bg-neutralSilver py-16">
        <div className="flex items-center justify-center lg:w-2/5 mx-auto">
          <div className="text-center">
            <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
              {" "}
              Si quieres saber mas informacion sobre Biologia accede al
              siguiente enlace{" "}
            </h2>
            <div className=" flex items-center justify-center gap-8">
              <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded  hover:bg-neutralDGrey">
                Entra aca
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
