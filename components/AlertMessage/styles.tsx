import styled from "styled-components";

export const StyledAlertMessage = styled.div<{
  $backgroundColor: string;
  $hoverColor: string;
  $textColor: string;
  $isDisable: string;
}>`
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  border-radius: 8px;
  border: ${(props: any) => props.$textColor} solid 1px;
  padding: 20px 20px 10px 20px;
  margin: 20px 0px;
  flex-basis: 100%;
  h3 {
    font-size: 16px;
    margin: 0px;
  }
`;

StyledAlertMessage.defaultProps = {
  $textColor: "var(--text-color)",
  $backgroundColor: "var(--white)",
  $hoverColor: "var(--white)",
};
