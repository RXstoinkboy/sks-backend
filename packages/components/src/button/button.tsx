import React from "react";
import styled from "styled-components";

export enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export type ButtonProps = {
  type: ButtonType;
  children: string;
};

const StyledButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.primaryColor};
  color: white;
`;
StyledButton.displayName = "StyledButton";

export const Button = (props: ButtonProps): JSX.Element => {
  return <StyledButton>{`${props.children} + ${props.type}`}</StyledButton>;
};
