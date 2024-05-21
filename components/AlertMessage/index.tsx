"use client";
import { StyledAlertMessage } from "./styles";

interface IAlertMessage {
  title: string;
  message: string;
  inputTitle?: string;
  placeholderText?: string;
  textColor?: any;
  backgroundColor?: any;
  hoverColor?: any;
  isDisable?: any;
}

export const AlertMessage = ({
  title,
  message,
  textColor,
  backgroundColor,
  hoverColor,
  isDisable,
}: IAlertMessage) => {
  return (
    <>
      <StyledAlertMessage
        $backgroundColor={backgroundColor}
        $hoverColor={hoverColor}
        $textColor={textColor}
        $isDisable={isDisable}
      >
        <h3>{title}</h3>
        <p>{message}</p>
      </StyledAlertMessage>
    </>
  );
};
