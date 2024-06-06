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
  .whatsapp {
    margin: 24px 0px 16px 0px;
    width: 100%;
    color: #fff;
    background-color: #09f;
    font-weight: 600;
    font-family: "Inter";
  }
  .email {
    margin: 0px 0px 16px 0px;
    border: 1px solid #09f;
    width: 100%;
    color: #09f;
    background-color: #fff;
    font-weight: 600;
    font-family: "Inter";
  }
  .cancelar {
    background-color: rgba(6, 6, 6, 0.16);
    color: #060606;
    width: 100%;
    font-family: "Inter";
    font-weight: 700;
  }
  .wrapper-copy {
    padding: 24px 0px;
    width: 100%;
    border: 1px dashed rgba(6, 6, 6, 0.46);
    border-radius: 8px;
  }
  .wrapper-copy p {
    margin: 4px 0px 0px 0px;
  }
  .btn {
    width: 100%;
    margin: 24px 0px 16px 0px;
  }
`;
