import React from "react";

export const ParticipateCard = ({ svg, description }: any) => {
  return (
    <div className="w-[504px] border-2 min-h-[344px] border-white rounded-xl">
      <div className="flex flex-col justify-center items-center h-96 gap-9">
        {svg}
        <p
          className="text-white  text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};
