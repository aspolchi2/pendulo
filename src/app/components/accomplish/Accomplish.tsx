import React from "react";

export const Accomplish = () => {
  return (
    <section className=" sm:bg-lograr bg-lograrMobile sm:h-[80vh] h-screen text-white bg-cover bg-center bg-no-repeat sm:p-28 sm:max-h-[800px] py-8 px-14">
      <div className="">
        <div className=" sm:w-10/12  flex flex-col justify-between h-full">
          <div className="">
            <h3 className=" sm:text-2xl text-base ">¿QUÉ QUEREMOS LOGRAR?</h3>
            <hr className="mt-5" />
          </div>
          <p className="xl:text-5xl lg:text-4xl md:text-3xl pt-10">
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
