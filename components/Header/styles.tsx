import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100%;
  background-color: #fff;
  .header-mob-user-menu {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .section {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1300px;
    margin: auto;
  }
  .logo {
    width: 182px;
    margin-right: 32px;
  }
  .back {
    background-image: url("./arrow-left.svg");
    background-position: 2px 0px;
    background-repeat: no-repeat;
    padding-left: 18px;
    background-size: contain;
  }
`;
