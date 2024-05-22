import styled from "styled-components";

export const StyledReserve = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 56px auto 56px auto;
  .wrapper-reserve {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .title-event {
  }
  .info-reserve {
    display: flex;
    align-items: center;
  }
  .info-reserve p {
    margin: 0;
  }
  .info-reserve .n-reserva {
    font-size: 32px;
    font-weight: 600;
    width: fit-content;
    margin: 0px 40px 0px 0px;
  }
  .box-blue {
    display: flex;
  }
  .vagas-aprovadas {
    width: fit-content;
  }
  .vagas-aprovadas p {
    padding: 8px;
    background-color: #0099ff29;
    width: fit-content;
    border-radius: 8px;
  }
  .desconto {
    width: fit-content;
    margin: 0px 8px;
  }
  .desconto p {
    padding: 8px;
    background-color: #0099ff29;
    width: fit-content;
    border-radius: 8px;
  }
  .periodo-pgto {
    width: fit-content;
  }
  .periodo-pgto p {
    padding: 8px;
    background-color: #0099ff29;
    width: fit-content;
    border-radius: 8px;
  }
  .wrapper-filter {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 40px 0px;
    align-items: center;
  }
  .filter {
    display: flex;
  }
  .filter div {
    padding: 12px 16px;
    cursor: pointer;
    font-weight: 600;
    position: relative;
  }
  .filter-pago {
    margin: 0px 8px;
  }
  .filter-pendente {
    margin: 0px 8px 0px 0px;
  }
  .filter-selecionado {
    background-color: #06060619;
    border-radius: 8px;
  }
  .filter-pago::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background-color: #13ce66; /* Cor da bolinha */
    border-radius: 50%;
  }
  .filter-pendente::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background-color: #fbbc05; /* Cor da bolinha */
    border-radius: 50%;
  }
  .filter-cancelado::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background-color: #f85449; /* Cor da bolinha */
    border-radius: 50%;
  }
  .search select {
    padding: 16px;
    border-radius: 8px;
    font-weight: 600;
    margin: 0px 24px 0px 0px;
    border: none;
    background-color: #06060619;
  }
  .search input {
    border: 1px solid #06060629;
    padding: 16px;
    background-color: transparent;
    border-radius: 8px;
  }
`;
