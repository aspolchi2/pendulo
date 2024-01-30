import React from "react";
import { TestimonialsCard } from "./TestimonialsCard";
import { cards } from "./Data";


export const TestimonialsCardList = () => {
  return (
    <div className="flex gap-7 justify-center">
      {cards.map((card => <TestimonialsCard key={card.id} {...card} />))}
    </div>
  );
};
