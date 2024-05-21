import styled from "styled-components";

export const StyledInput = styled.input<{
  $backgroundColor: string;
  $hoverColor: string;
  $textColor: string;
  $isDisable: string;
}>`
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  border-radius: 8px;
  border: ${(props: any) => props.$textColor} solid 1px;
  padding: 0px 10px;
  height: 46px;
  font-weight: 600;
  margin-bottom: 15px;
  flex-basis: 100%;
  &:hover {
    background-color: ${(props) => props.$hoverColor};
    color: ${(props) => props.$textColor};
  }
  [type="submit"] {
    background-color: black;
    border: none;
  }
`;

StyledInput.defaultProps = {
  $textColor: "var(--text-color)",
  $backgroundColor: "var(--white)",
  $hoverColor: "var(--white)",
};
