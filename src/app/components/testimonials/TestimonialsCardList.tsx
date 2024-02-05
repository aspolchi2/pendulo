import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";
import { cards } from "./Data";
import { AnimatePresence } from "framer-motion";

export const TestimonialsCardList = ({ filter }: { filter: number }) => {
  const slicedCards = cards.slice(filter - 3, filter);
  return (
    <div className="flex gap-7 justify-center">
      <AnimatePresence initial={false}>
        {slicedCards.map((card) => (
          <TestimonialsCard key={card.id} {...card} />
        ))}
      </AnimatePresence>
    </div>
  );
};
