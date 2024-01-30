import React from "react";
import { OfferingCardList } from "./OfferingCardList";

export const Offering = () => {
  return (
    <section className="bg-offering">
      <div className="bg-black bg-opacity-60 ">
        <div className="w-10/12 m-auto pt-28 flex flex-col gap-20 pb-28">
          <div>
            <h3 className="text-white text-2xl">
            ¿QUÉ OFRECEMOS?
            </h3>
            <hr className="text-white mt-5" />
          </div>
          <div className="">
            <OfferingCardList />
          </div>
        </div>
      </div>
    </section>
  );
};
