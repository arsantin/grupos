import styled from "styled-components";

export const ButtonGerador = styled.button`
  height: 34px;
  color: rgba(0, 153, 255, 1);
  font-weight: 600;
  background-color: white;
  border-radius: 8px;
  border: solid 1px rgba(0, 153, 255, 1);
  cursor: pointer;
  margin: 10px 0px 30px 0px;
`;

export const RadioStyle = styled.div`
  display: flex;
  margin: 8px 0px 16px 0px;
  .collection-input {
    display: flex;
    margin: 8px 0px 8px 0px;
  }
  .input1,
  .input2 {
    display: flex;
    input {
      width: 18px;
      font-family: "Inter", sans-serif;
    }
    label {
      margin: 0px 20px 0px 5px;
      margin-top: 4px;
      font-weight: 600;
      font-size: 18px;
      margin-right: 20px;
    }
  }
  .input3,
  .input4,
  .input5 {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin: 0px 10px 0px 0px;
    input {
      width: 18px;
      background-color: white;
    }
    label {
      margin: 0px 20px 10px 5px;
      margin-top: 5px;
      font-weight: 600;
      font-size: 18px;
      margin-right: 20px;
    }
    p {
      margin: 0px 0px 0px 5px;
      padding: 0;
      color: rgba(6, 6, 6, 0.56);
      font-size: 14px;
    }
  }
  .Tooltip1 {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);
    color: black;
    margin: -15px 0px 0px 130px;
    padding: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .Arroow {
    margin-left: -160px;
  }
  .Tooltip {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);
    color: black;
    margin-top: -15px;
    padding: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
export const WrapperEvent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  max-width: 780px;
  margin: auto;
  border-radius: 10px;
  position: relative;
  select {
    border-radius: 8px;
    border: 1px solid rgba(6, 6, 6, 0.16);
    background: #fff;
    padding: 15px;
  }
  .css-13cymwt-control {
    height: 45px;
    &:focus {
      height: 45px;
    }
  }
  .zHxUI .custom-select__control {
    border-radius: 3px;
    height: 45px;
  }
`;

export const CloseButton = styled.div`
  background-color: #f1f2f3;
  width: 34px;
  height: 34px;
  display: block;
  border-radius: 25px;
  background-image: url("/clear.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
`;

export const FormStepOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
  background-color: #fff;
  border-radius: 10px;
  p {
    font-size: 14px;
  }
  span {
    color: #c90000;
    font-size: 12px;
  }
  label {
    width: 100%;
    color: #060606;
    font-size: 14px;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(6, 6, 6, 0.16);
    background: #fff;
    font-family: "Inter";
    padding: 15px;
    &:focus {
      outline: 1px solid #060606;
    }
  }
  .selectModalidade {
    margin-top: 20px;
    width: 285px;
  }
  .selectModalidade select {
    margin-top: 10px;
  }
  .half-nomargin {
    flex-basis: 50%;
    flex-wrap: wrap;
    display: flex;
  }
  .full-nomargin {
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .full {
    flex-basis: 100%;
    margin: 0px 0px 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &.nowrap {
      flex-wrap: nowrap;
      .endereco {
        margin: 0px 10px;
        height: 15px;
      }
    }
    p {
      margin: 10px 0px;
    }
    .css-b62m3t-container {
      width: 100%;
    }
  }
  input[type="date"] {
    font-family: "Inter", sans-serif;
  }
  input[type="number"] {
    font-family: "Inter", sans-serif;
  }
  .row-date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .half {
    display: flex;
    flex-direction: column;
    flex-basis: calc(50% - 10px);
  }
  .half input {
    width: 90%;
  }
  .half label {
    margin-top: 0px;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 16px;
  }
  .zeroMargin {
    margin-bottom: 0px;
  }
  .row-value {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .row label {
    margin-bottom: 10px;
  }
  .row select {
    width: 100%;
    margin-right: 20px;
  }
  .row .valorSelect {
    flex-basis: calc(50% - 10px);
    margin-left: 10px;
  }
  .labelValor {
    margin-bottom: 10px;
  }
  .tipoDeCupom {
    flex-basis: calc(50% - 10px);
    margin-right: 10px;
  }
  .tipoDeCupom label {
    display: flex;
  }
  .btn-salvar {
    display: flex;
    flex-basis: 100%;
    justify-content: right;
    margin-top: 24px;
  }
  .salvar {
    width: 83px;
    height: 48px;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #09f;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      background-color: #0088e3;
      color: #fff;
    }
  }
  .modalidade {
    margin: 30px 0px 0px 0px;
    flex-basis: calc(50% - 10px);
  }
  .modalidade .custom-select {
    margin-top: 10px;
  }
  .row-modalidade {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .custom-select__control {
    border-radius: 8px;
    border: 1px solid rgba(6, 6, 6, 0.16);
    background: #fff;
  }
  .custom-select {
    margin-top: 8px;
    border-radius: 8px;
  }
  .custom-select span {
    display: none;
  }
  .custom-select__option {
    color: #333;
  }
  .custom-select__option--is-selected {
    background-color: #ffffff;
  }
  .custom-select__option--is-focused {
    background-color: #f2f2f2;
  }
  .custom-select__menu {
    border: 1px solid #ccc;
    background-color: #fff;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 90px;
    border-radius: 8px;
    background: rgba(6, 6, 6, 0.08);
    font-family: "Inter";
    border: none;
    padding: 14px;
  }
  .row-title {
    margin: 16px 0px 8px 0px;
  }
`;
