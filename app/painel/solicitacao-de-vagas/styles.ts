import styled from "styled-components";

export const StyledRequest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  .wrapper-request {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .wrapper-request p {
    margin: 0;
  }
  .wrapper-request h2 {
    font-size: 32px;
    margin: 16px 0px;
  }
  .prazo-grupo {
    width: calc(308px - 42px);
    padding: 24px 21px;
    border-radius: 8px;
    background-color: #0099ff29;
    text-align: center;
    margin: 24px auto;
    font-weight: 400;
  }
  .info-grupos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 32px);
    max-width: 308px;
  }
  .info-grupos-row {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  .info-grupos-row input {
    padding: 16px 0px 16px 16px;
    border-radius: 8px;
    border: 1px solid #06060629;
    margin: 8px 0px 16px 0px;
    width: calc(100% - 16px);
    font-family: "Inter";
  }
  .info-grupos-row select {
    padding: 16px 0px 16px 16px;
    border-radius: 8px;
    border: 1px solid #06060629;
    margin: 8px 0px 16px 0px;
    width: 100%;
    font-family: "Inter";
  }
  .info-grupos .enviar {
    background-color: #060606;
    border: none;
    color: #fff;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    margin: 8px 0px 0px 0px;
    font-weight: 600;
    cursor: pointer;
    font-family: "Inter";
  }
`;
