import styled from "styled-components";

export const StyleMain = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  margin: auto;
  max-width: 1200px;
  flex-wrap: wrap;
  .html-description {
    margin-top: 20px;
  }
  .answer-description {
    margin-top: 20px;
  }
  .wrapper-main {
    max-width: 650px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }

  p {
    flex-basis: 100%;
    margin-bottom: 25px;
  }
  .button {
    margin-right: 15px;
  }

  .wrapper-questions {
    margin-top: 60px;
    flex-basis: 100%;
    h3 {
      margin-bottom: 20px;
    }
    .container-q {
      border: solid 1px #d7d7d7;
      padding: 20px;
      margin-bottom: 10px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      color: #060606;
      position: relative;
      img {
        position: absolute;
        top: 25px;
        right: 20px;
        z-index: 1;
      }
    }
  }
`;
