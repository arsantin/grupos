import styled from "styled-components";

export const StyledPayment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  p {
    margin: 0px 0px 16px 0px;
  }
  .Qr-code {
    margin: 40px auto;
    padding: 40px;
    border-radius: 8px;
    border: 2px solid #0099ff;
    width: 100%;
    max-width: 930px;
    display: flex;
    flex-direction: column;
  }
  .detalhes-pix {
    display: flex;
    margin: 0px auto;
    width: 100%;
    max-width: 422px;
  }
  .detalhes-pix p {
    margin: 0;
  }
  .image-qrcode {
    margin: 40px auto;
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .btn-pay {
    width: 100%;
    max-width: 400px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  .btn-pay button {
    padding: 16px;
  }
  .btn {
    width: 100%;
    max-width: 203px;
    margin: 0px 16px 0px 0px;
  }
  .btn:last-child {
    margin: 0;
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
`;
