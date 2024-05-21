import styled from "styled-components";

export const StyledButton = styled.button<{
  $backgroundColor: string;
  $hoverColor: string;
  $textColor: string;
  $borderProps: string;
  $textHoverColor: string;
  $paddingProps: string;
}>`
  font-size: 14px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  border-radius: 8px;
  border: ${(props) => props.$borderProps};
  padding: ${(props) => props.$paddingProps};
  font-weight: 600;
  &:hover {
    background-color: ${(props) => props.$hoverColor};
    color: ${(props) => props.$textHoverColor};
    cursor: pointer;
  }
`;

StyledButton.defaultProps = {
  $textColor: "var(--white)",
  $backgroundColor: "var(--primary)",
  $hoverColor: "var(--primary-hover)",
  $borderProps: "none",
  $paddingProps: "10px 10px",
};
