"use client";
import useBooleanStore from "@/app/zustand/useBooleanStore";
import React from "react";

export const NextCourses = ({ data }: { data: any }) => {
  const { toggle, booleanValue } = useBooleanStore();

  const scrollToTarget = () => {
    toggle();
    const element = document.getElementById("prices");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black p-28 text-white">
      <div className="flex flex-col gap-6">
        <h3 className="text-5xl font-bold">Próximos inicios</h3>
        <div className="border rounded-lg flex p-14 justify-around ">
          {Object.entries(data).map((key: any, i) => {
            return (
              <div className="" key={i}>
                <p>{key[0]}</p>
                <p
                  className="first-line:font-bold text-xl"
                  dangerouslySetInnerHTML={{ __html: key[1] }}
                ></p>
              </div>
            );
          })}
          <div className="self-center">
            <button
              onClick={() => scrollToTarget()}
              className="bg-primary py-3 px-8 rounded-lg w-60"
            >
              {booleanValue ? "OCULTAR PRECIOS" : "VER PRECIOS"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextCourses;
