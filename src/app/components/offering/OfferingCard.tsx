import React from "react";
import { MyData } from "./OfferingCardList";

export const OfferingCard = ({ svg, title, description }: MyData) => {
  return (
    <article className="bg-white text-black w-[376px] flex flex-col justify-center items-center gap-8 rounded-3xl">
      <header className="text-pink flex flex-col gap-5 justify-center items-center mt-[56px]">
        {svg}
        <p
          className="text-3xl font-black text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
      </header>
      <main className="w-10/12">
        <p className="text-center h-[131px] w-9/12 m-auto">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
      </main>
    </article>
  );
};
