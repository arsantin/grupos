import styled from "styled-components";

export const StyleMain = styled.main`
  width: calc(100% - 40px);
  padding: 70px 20px;
  display: flex;
  margin: auto;
  max-width: 650px;
  flex-wrap: wrap;
  h2 {
    font-size: 36px;
    margin: 0px;
    flex-basis: 100%;
  }
  p {
    flex-basis: 100%;
    margin-bottom: 25px;
  }
  .button {
    margin-right: 15px;
  }
`;
