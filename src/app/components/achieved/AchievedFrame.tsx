import React from "react";
import { AchievedCardList } from "./AchievedCardList";

export const AchievedFrame = () => {
  return (
    <section>
      <div className="w-10/12 m-auto sm:pt-28 pt-14 flex flex-col gap-10 sm:gap-20 sm:pb-40 pb-20 overflow-x-hidden">
        <div>
          <h3 className="text-primary sm:text-2xl text-base text-left">
            ¿CÓMO LO ESTAMOS CONSIGUIENDO?
          </h3>
          <hr className="text-primary mt-5" />
        </div>
        <div className="">
          <AchievedCardList />
        </div>
      </div>
    </section>
  );
};
