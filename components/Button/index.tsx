"use client";
import { type ReactNode } from "react";
import { StyledButton } from "./styles";

interface IButton {
  title: string | ReactNode;
  btnFunction: () => void;
  textColor?: any;
  backgroundColor?: any;
  hoverColor?: any;
  textHoverColor?: any;
  borderProps?: any;
  paddingProps?: any;
}

export const Button = ({
  title,
  btnFunction,
  textColor,
  textHoverColor,
  borderProps,
  backgroundColor,
  hoverColor,
  paddingProps,
}: IButton) => {
  return (
    <>
      <StyledButton
        $paddingProps={paddingProps}
        $borderProps={borderProps}
        $backgroundColor={backgroundColor}
        $hoverColor={hoverColor}
        $textColor={textColor}
        $textHoverColor={textHoverColor}
        onClick={() => {
          btnFunction();
        }}
      >
        {title}
      </StyledButton>
    </>
  );
};
