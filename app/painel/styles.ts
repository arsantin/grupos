import styled from "styled-components";

export const StylePainel = styled.div`
  width: calc(100% - 40px);
  display: flex;
  max-width: 1200px;
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
