import styled from "styled-components";

export const FooterMainContainer = styled.div`
  background-color: rgba(6, 6, 6, 0.08);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 30px 50px;
  @media (max-width: 767px) {
    padding: 20px;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1300px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(6, 6, 6, 0.08);
    flex-wrap: wrap;
  }
  .icon-media {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  h3 {
    margin: 0px 0px 25px 0px;
  }
  .column-1 {
    flex-basis: 22%;
    img.mob {
      display: none;
    }
    @media (max-width: 767px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .icon-media {
        max-width: 150px;
      }
      img.web {
        display: none;
      }
      img.mob {
        display: block;
      }
      img,
      p,
      .icon-media {
        flex-basis: 100%;
        margin: auto;
        text-align: center;
      }
    }
  }
  .column-2,
  .column-3,
  .column-4 {
    flex-basis: 18%;
    @media (max-width: 767px) {
      display: none;
    }
  }

  ul {
    padding: 8px 0px 0px 0px;
  }
  ul li {
    list-style: none;
    margin: 0px 0px 15px 0px;
    cursor: pointer;
  }
  ul li:hover {
    color: #0099ff;
  }
  .column-1 p {
    margin: 30px 0px;
    width: 100%;
  }
  p {
    margin: 40px 0px 0px 0px;
    text-align: left;
    width: 100%;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    h3 {
      margin: 0px 0px 15px 0px;
    }
    .wrapper {
      padding: 0;
    }
    .column-1,
    .column-2,
    .column-3,
    .column-4 {
      flex-basis: 100%;
      margin: 25px 0px 25px 0px;
    }
    p {
      width: 100%;
    }
  }
`;
