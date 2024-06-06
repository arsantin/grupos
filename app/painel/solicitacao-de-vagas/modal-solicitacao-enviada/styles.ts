import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  max-width: calc(420px - 64px);
  width: calc(100% - 64px);
  align-items: center;
  text-align: center;
  img {
    margin: 0px 0px 16px 0px;
  }
  h2 {
    margin: 0px 0px 8px 0px;
    font-size: 24px;
  }
  p {
    margin: 0px 0px 16px 0px;
  }
  h4 {
    margin: 0px 0px 24px 0px;
  }
  input {
    padding: 16px 24px;
    border: none;
    border-radius: 8px;
    background-color: #060606;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;
