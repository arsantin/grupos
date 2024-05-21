import styled from "styled-components";

export const DialogStyle = styled.div`
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  left: 0px;
  overflow: auto;
  dialog {
    margin-top: 20px;
    border: none;
    background: transparent;
  }

  .confirm.show + .overlay {
    display: block;
  }

  .button {
    background: var(--secondary);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 450px) {
    .confirm {
      width: 300px;
      left: calc(50% - 150px);
    }
  }
`;
