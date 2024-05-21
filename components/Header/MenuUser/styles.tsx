import styled from "styled-components";

export const StyleMenu = styled.div`
  display: flex;
  .pic-user {
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
  .user-orders {
    margin-right: 10px;
    font-size: 12px;
    menu {
      margin-left: -40px;
      @media (max-width: 767px) {
        display: none;
      }
      li {
        list-style: none;
        a {
          font-weight: 500;
          white-space: nowrap;
          text-decoration: none;
          color: #060606;
        }
      }
    }
  }
`;
