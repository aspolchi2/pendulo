import React from "react";

export const Accomplish = () => {
  return (
    <section className=" bg-lograr h-[80vh] text-white bg-cover bg-center bg-no-repeat p-28 max-h-[800px]">
      <div className="">
        <div className=" w-10/12 m-auto">
          <h3 className=" text-2xl ">¿QUÉ QUEREMOS LOGRAR?</h3>
          <hr className="mt-5" />
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
