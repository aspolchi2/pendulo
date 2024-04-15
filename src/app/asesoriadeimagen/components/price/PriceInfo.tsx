import React from "react";

export const PriceInfo = ({
  title,
  description,
  color,
}: {
  title: string;
  description: any;
  color: string;
}) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h3 className={`${color} font-semibold text-center sm:text-4xl`}>
        {title}
      </h3>
      <p className="text-base">{description}</p>
    </div>
  );
};
