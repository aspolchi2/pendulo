import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";
import { cards } from "./Data";
import { AnimatePresence } from "framer-motion";
import Carousel from "../carousel/Carousel";

export const TestimonialsCardList = ({ filter }: { filter: number }) => {
  const slicedCards = cards.slice(filter - 3, filter);
  return (
    <>
      <div className="sm:flex gap-7 justify-center hidden">
        <AnimatePresence initial={false}>
          {slicedCards.map((card) => (
            <TestimonialsCard key={card.id} {...card} />
          ))}
        </AnimatePresence>
      </div>
      <div className="sm:hidden h-[500px]">
        <Carousel text="Conoce más experiencias" dotsColor="bg-black">
          {cards.map((item) => (
            <TestimonialsCard key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
