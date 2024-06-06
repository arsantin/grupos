import styled from "styled-components";

export const StyledReserve = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0px auto 56px auto;
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
    margin: 16px 0px 0px 0px;
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
  .search .perguntas {
    background-color: #fbbc05;
    border: none;
    margin: 0px 24px 0px 0px;
    font-weight: 600;
  }
  form {
    width: 100%;
    position: relative;
  }
  .title-list {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0px 0px 8px 0px;
  }
  .title-cpf {
    flex-basis: 16%;
    margin-left: 19px;
    display: flex;
    align-items: center;
  }
  .title-atleta {
    flex-basis: 20%;
  }
  .title-email {
    flex-basis: 18%;
  }
  .title-genero {
    flex-basis: 7%;
  }
  .title-nasc {
    flex-basis: 13%;
  }
  .title-cat {
    flex-basis: 17%;
  }
  .title-modali {
    flex-basis: 19%;
  }
  .title-camisa {
    flex-basis: 5%;
  }
  .action {
    flex-basis: 4%;
    text-align: right;
  }
  .list-reserva {
    padding: 16px 19px;
    margin: 0px 0px 4px 0px;
    width: 100%;
    border: 1px solid #06060629;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
  .list-reserva input {
    background-color: transparent;
    border: 1px solid #06060679;
    border-radius: 4px;
    padding: 5px 0px 5px 7px;
    font-family: "Inter";
  }
  .box-status {
    width: 5px;
    height: 80%;
    background-color: #13ce66;
    position: absolute;
    top: 0;
    left: 0px;
  }
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }
  .list-cpf {
    flex-basis: 10%;
    margin-right: 10px;
    max-width: 125px;
  }
  .list-cpf input {
    max-width: 120px;
  }
  .list-atleta {
    flex-basis: 19%;
  }
  .list-atleta input {
    width: 100%;
    max-width: 165px;
  }
  .list-email {
    flex-basis: 16%;
  }
  .list-email input {
    max-width: 180px;
  }
  .list-genero {
    flex-basis: 6%;
    display: flex;
    justify-content: center;
  }
  .list-genero select {
    width: 100%;
    max-width: 50px;
    padding: 3px 0px 3px 7px;
    border-radius: 4px;
    background-color: transparent;
    font-family: "Inter";
  }
  .list-data {
    flex-basis: 12%;
  }
  .list-data input {
    max-width: 106px;
    padding: 4px 0px 4px 7px;
  }
  .list-categoria {
    flex-basis: 16%;
  }
  .list-categoria select {
    width: 100%;
    max-width: 150px;
    padding: 3px 0px 3px 7px;
    border-radius: 4px;
    background-color: transparent;
    font-family: "Inter";
  }
  .list-modalidade {
    flex-basis: 17%;
  }
  .list-modalidade input {
    max-width: 155px;
  }
  .list-camisa {
    flex-basis: 5%;
  }
  .list-camisa select {
    width: 90%;
    background-color: transparent;
    border-radius: 4px;
    font-family: "Inter";
    padding: 3px 0px 3px 7px;
  }
  .icon {
    display: flex;
  }
  .icon img {
    cursor: pointer;
  }
  .btn-add {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .btn-add input {
    border-radius: 25px;
    background-color: #fff;
    color: #060606;
    padding: 8px 16px;
    border: 1px solid rgba(6, 6, 6, 0.16);
    font-weight: 600;
  }
  .menu-config {
    position: absolute;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    left: 95%;
    top: 80%;
    width: max-content;
  }
  .menu-config p {
    margin: 8px 0px;
    cursor: pointer;
  }
  .icon-search {
    background-repeat: no-repeat;
    background-position: 160px;
    background-image: url("/icon_search_black.svg");
    font-family: "Inter";
  }
`;
