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
      className={`${props.extraclassname} bg-accent  rounded-md text-white font-semibold text-center `}
      {...props}
    >
      {props.children}
    </a>
  );
};
