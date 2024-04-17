import React from "react";

const HistoriaCarouselItem = ({
  year,
  title,
}: {
  year: string;
  title: string;
}) => {
  return (
    <div>
      <ul>
        <li>
          <p>{year}</p>
          <p>{title}</p>
        </li>
      </ul>
    </div>
  );
};

export default HistoriaCarouselItem;
