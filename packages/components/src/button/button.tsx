import React from "react";

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export type ButtonProps = {
  type: ButtonType;
  children: string;
};

export const Button = (props: ButtonProps): JSX.Element => {
  return <button>{`${props.children} + ${props.type}`}</button>;
};
