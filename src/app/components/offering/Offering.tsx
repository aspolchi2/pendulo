import React from "react";
import { OfferingCardList } from "./OfferingCardList";

export const Offering = () => {
  return (
    <section className="bg-offering bg-cover bg-center bg-no-repeat">
      <div className="bg-black bg-opacity-60 bg-contain bg-no-repeat sm:p-20 p-10">
        <div className="m-auto flex flex-col gap-20 ">
          <div>
            <h3 className="text-white text-2xl">¿QUÉ OFRECEMOS?</h3>
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
