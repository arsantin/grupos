import styled from "styled-components";

export const StyledPayment = styled.div`
  width: 100%;
  .title-list {
    width: 100%;
    display: flex;
    font-weight: 600;
    margin: 40px 0px 10px 20px;
  }
  .atleta {
    flex-basis: 19.6%;
  }
  .email {
    flex-basis: 18.3%;
  }
  .sexo {
    flex-basis: 8.3%;
  }
  .categoria {
    flex-basis: 16%;
  }
  .modalidade {
    flex-basis: 16%;
  }
  .camisa {
    flex-basis: 15%;
  }
  .valor {
    flex-basis: 5%;
  }
  .list-detalhes {
    border-radius: 8px;
    border: 1px solid #06060629;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .content-list {
    width: 96%;
    display: flex;
    padding: 20px 24px;
    border-bottom: 1px solid #06060629;
  }
  .content-list:last-child {
    border-bottom: none;
  }
  .list-atleta {
    flex-basis: 20%;
  }
  .list-email {
    flex-basis: 19.5%;
  }
  .list-sexo {
    flex-basis: 9%;
  }
  .list-categoria {
    flex-basis: 16.5%;
  }
  .list-modalidade {
    flex-basis: 17%;
  }
  .list-camisa {
    flex-basis: 13%;
  }
  .list-valor {
    flex-basis: 6%;
    text-align: right;
  }
`;
