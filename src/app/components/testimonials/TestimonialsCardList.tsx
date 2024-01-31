import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";
import { cards } from "./Data";

export const TestimonialsCardList = ({ filter }: { filter: number }) => {
  const slicedCards = cards.slice(filter - 3, filter);
  return (
    <div className="flex gap-7 justify-center">
      {slicedCards.map((card) => (
        <TestimonialsCard key={card.id} {...card} />
      ))}
    </div>
  );
};
