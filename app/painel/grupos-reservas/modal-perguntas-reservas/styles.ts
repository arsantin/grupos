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
    width: 109px;
  }
  .cancelar {
    background-color: rgba(6, 6, 6, 0.16);
    color: #060606;
    width: 100%;
    font-family: "Inter";
    font-weight: 700;
    max-width: 109px;
    margin: 0px 16px 0px 0px;
  }
  .btn-delete {
    display: flex;
    width: 70%;
    justify-content: space-between;
  }
  .btn {
    max-width: 120px;
  }
`;
