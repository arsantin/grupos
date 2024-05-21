"use client";
import { StyledInput } from "./styles";

interface IInput {
  inputTitle?: string;
  inputType: string;
  placeholderText?: string;
  textColor?: any;
  backgroundColor?: any;
  hoverColor?: any;
  isDisable?: any;
}

export const Input = ({
  inputTitle,
  inputType,
  placeholderText,
  textColor,
  backgroundColor,
  hoverColor,
  isDisable,
}: IInput) => {
  return (
    <>
      <StyledInput
        value={inputTitle}
        type={inputType}
        placeholder={placeholderText}
        $backgroundColor={backgroundColor}
        $hoverColor={hoverColor}
        $textColor={textColor}
        $isDisable={isDisable}
      />
    </>
  );
};
