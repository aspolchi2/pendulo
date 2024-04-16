import React from "react";
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  extraclassname?: string;
}

export const Button = (props: any) => {
  return (
    <a
      href={props.goto ? props.goto : "#cursos"}
      className={`${props.extraclassname} bg-accent sm:px-8 sm:py-5 lg:text-2xl rounded-2xl text-white font-semibold px-4 py-4 text-xs `}
      {...props}
    >
      {props.children}
    </a>
  );
};
