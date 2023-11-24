import React from "react";

export const PriceInfo = ({
  title,
  description,
}: {
  title: string;
  description: any;
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-primary font-semibold text-center text-4xl">
        {title}
      </h3>
      {description}
    </div>
  );
};
