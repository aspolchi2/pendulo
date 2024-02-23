import React from "react";
import { MyData } from "./OfferingCardList";

export const OfferingCard = ({ svg, title, description }: MyData) => {
  return (
    <article className="bg-white text-black lg:w-[400px] w-1/4 flex flex-col justify-center items-center gap-6 rounded-3xl max-h-[350px]">
      <header className="text-pink flex flex-col gap-5 justify-center items-center mt-[56px]">
        {svg}
        <p
          className="text-3xl font-black text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
      </header>
      <main className="w-9/12">
        <p className="text-center h-[131px]  m-auto">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
      </main>
    </article>
  );
};
