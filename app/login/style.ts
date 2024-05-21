import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #06060629;
  border-radius: 16px;
  width: 100%;
  max-width: 440px;
  margin: auto;
  padding: 32px;
  background-color: #fff;
  h2 {
    text-align: center;
    margin: auto auto 16px auto;
    font-size: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form div {
    display: flex;
    flex-direction: column;
  }
  form input {
    border: 1px solid #06060629;
    padding: 16px;
    border-radius: 8px;
    margin: 8px 0px 0px 0px;
  }
  .senha {
    margin: 24px 0px;
  }
  .btn-continuar {
    border: none;
    margin: 24px 0px 0px 0px;
    cursor: pointer;
  }
  .esqueci-senha {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 16px 0px 32px 0px;
    text-decoration: underline;
    font-weight: 400;
    border-bottom: 1px dashed #06060629;
    padding: 0px 0px 32px 0px;
  }
  .criar-conta {
    width: 100%;
    margin: auto;
  }
  .criar-conta p {
    margin: auto;
    text-align: center;
  }
  .criar-conta input {
    background-color: #060606;
    border: none;
    color: #fff;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    margin: 8px 0px 0px 0px;
  }

  .View-cadastro .title h2 {
    margin: 0px 0px 0px 0px;
  }
  .View-cadastro .title p {
    margin: 8px 0px 32px 0px;
    text-align: center;
  }
  .document {
    margin: 16px 0px;
    display: flex;
  }
  .select-document {
    display: flex;
    flex-direction: row;
  }
  .document .select-document select {
    width: 30%;
    margin: 8px 0px 0px 0px;
    border-color: #06060629;
    border-right: none;
    border-radius: 8px 0px 0px 8px;
    padding: 0px 16px;
  }
  .document .select-document input {
    width: 100%;
    border-left: none;
    border-radius: 0px 8px 8px 0px;
  }
  .senha {
    margin: 16px 0px 0px 0px;
  }
  .confirmar-senha {
    margin: 16px 0px 24px 0px;
  }
  .termos {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin: 8px 0px;
  }
  .termos input {
    margin: 0px 8px 0px 0px;
    width: 18px;
    height: 18px;
  }
`;
