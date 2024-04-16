import React from "react";

export const ParticipateCard = ({ svg, description }: any) => {
  return (
    <div className="sm:w-[504px] w-11/12 max-w-96 xl:max-w-full border-2 sm:min-h-[344px]  border-white rounded-xl  m-auto">
      <div className="flex flex-col justify-center items-center sm:h-96 gap-9 h-80">
        {svg}
        <p
          className="text-white  text-center text-sm lg:text-base"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};
