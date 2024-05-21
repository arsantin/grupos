import styled from "styled-components";

export const StyleVerticalUserMenu = styled.div`
  display: flex;
  margin: 40px 0px 0px 0px;
  flex-wrap: wrap;
  background-color: #fff;
  width: calc(100% - 54px);
  padding: 35px 25px;
  border-radius: 15px;
  border: solid 2px #dbdbdb;
  box-shadow: 0px 0px 5px #d3d3d3;
  position: relative;
  @media (max-width: 767px) {
    position: absolute;
    top: 0px;
    height: 100vh;
    margin: 0px;
    z-index: 2;
  }
  .close {
    background-image: url("./close.png");
    position: absolute;
    top: 20px;
    text-indent: -9999px;
    right: 25px;
    display: block;
    width: 32px;
    height: 32px;
    z-index: 3;
    @media (min-width: 768px) {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .profile-user {
    flex-basis: 100%;
  }
  .wrapper {
    flex-basis: 100%;
    border-top: solid 2px var(--gray-hover);
    overflow: auto;
    margin-top: 20px;
    h3 {
      color: #060606;
      font-size: 16px;
      margin: 15px 0px 0px 0px;
      flex-basis: 100%;
      background-image: url("./expand-more.png");
      background-repeat: no-repeat;
      background-position: top right;
    }

    menu {
      margin: 10px 0px 10px -40px;
      li {
        list-style: none;
        line-height: 30px;
        a {
          font-weight: 500;
          padding: 5px;
          color: var(--text-color);
          &:hover {
            background-color: var(--gray-hover);
            border-radius: 4px;
          }
        }
      }
    }
  }
`;
