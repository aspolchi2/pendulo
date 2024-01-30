import React from "react";
import { AchievedCardList } from "./AchievedCardList";

export const AchievedFrame = () => {
  return (
    <section>
      <div className="w-10/12 m-auto pt-28 flex flex-col gap-20 pb-40">
        <div>
          <h3 className="text-primary text-2xl">¿CÓMO LO ESTAMOS CONSIGUIENDO?</h3>
          <hr className="text-primary mt-5" />
        </div>
        <div className="">
          <AchievedCardList />
        </div>
      </div>
    </section>
  );
};
