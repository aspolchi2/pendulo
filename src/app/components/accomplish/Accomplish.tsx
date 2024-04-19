import React from "react";

export const Accomplish = () => {
  return (
    <section className=" lg:bg-lograr bg-lograrMobile sm:h-[80vh] h-dvh  text-white xl:bg-cover bg-cover bg-center bg-no-repeat xl:p-28  sm:max-h-[800px] p-7 pt-14">
      <div className="w-full h-full">
        <div className="  flex flex-col justify-between h-full">
          <div className="">
            <h3 className=" sm:text-2xl text-lg ">¿QUÉ QUEREMOS LOGRAR?</h3>
            <hr className="mt-5" />
          </div>
          <p className="xl:text-5xl lg:text-4xl md:text-3xl text-xl pt-10">
            Queremos{" "}
            <span className="font-black  text-yellow">
              {" "}
              humanizar <br /> la educación profesional,
              <br />
            </span>{" "}
            facilitar el acceso al conocimiento <br />
            <span className="font-black">
              {" "}
              y fortalecer la creatividad <br /> latinoamericana.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
