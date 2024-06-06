import styled from "styled-components";

export const StyledPayment = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  .title-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .info-event {
    display: flex;
  }
  .info-event div {
    padding: 8px;
    border-radius: 4px;
    background-color: rgba(0, 153, 255, 0.16);
    margin: 24px 4px 0px 4px;
  }
  .wrapper-payment {
    display: flex;
    width: 100%;
    max-width: 1000px;
    justify-content: space-between;
    margin: 40px 0px 0px 0px;
  }
  .content-payment {
    width: 65%;
  }
  .pix {
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #06060629;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .selected {
    outline: 2px solid #060606 !important;
    background-color: #fff;
  }
  .line-pix {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .line-pix div {
    display: flex;
    align-items: center;
  }
  .line-pix .type {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0px 0px 0px 16px;
  }
  .type p {
    margin: 0;
    text-align: left;
  }
  .boleto {
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #06060629;
    margin: 8px 0px 0px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .details-order {
    box-shadow: 4px 4px 16px 0px #3377ff3d;
    border-radius: 8px;
    padding: 24px;
    background-color: #fff;
    border: 2px solid #0099ff;
    width: 25%;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
  }
  .details-order h3 {
    margin: 0px 0px 8px 0px;
    font-size: 16px;
  }
  .details-order p {
    margin: 0;
    width: auto;
  }
  .details-order .details {
    color: #0099ff;
    text-decoration: underline;
    margin: 24px 0px 0px 0px;
  }
  .details-order .info-basic {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .details-order .info-basic p {
    width: fit-content;
    margin: 0;
    padding: 0;
  }
  .details-order .info-basic p:last-child {
    text-align: right;
    flex-basis: 40%;
    margin: 4px 0px 0px 0px;
  }
  hr {
    background-color: #06060629;
    width: 100%;
    margin: 16px 0px 24px 0px;
  }
  .total {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }
  .total p {
    margin: 0;
    text-align: left;
  }
  .total p:last-child {
    text-align: right;
  }
  .btn-pedido {
    margin: 16px 0px 0px 0px;
    width: 100%;
  }
  .details-order .btn-pedido input {
    width: 100%;
    display: flex;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-family: "Inter";
    padding: 16px 0px;
    background-color: #0099ff;
    color: #fff;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .info-payment {
    width: calc(100% - 48px);
    display: flex;
    margin: 36px 0px 0px 0px;
    padding: 24px;
    border-radius: 8px;
    background-color: rgba(0, 153, 255, 0.16);
    text-align: left;
  }
  .info-payment h3 {
    font-size: 16px;
    margin: 0px 0px 8px 16px;
  }
  .info-payment ul {
    margin: 0;
    padding: 0px 0px 0px 37px;
  }
  .info-payment ul li {
    margin: 0;
  }
  .content-payment .btn-pedido input {
    width: 100%;
    max-width: 130px;
    display: flex;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-family: "Inter";
    padding: 16px 0px;
    background-color: #060606;
    color: #fff;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
