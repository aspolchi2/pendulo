import React from "react";
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  extraclassname?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${props.extraclassname} bg-accent px-8 py-5 text-2xl rounded-[50px] text-white font-semibold`}
      {...props}
    >
      {props.children}
    </button>
  );
};
