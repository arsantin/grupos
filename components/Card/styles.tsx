import styled from "styled-components";

export const StyledCard = styled.div<{
  $backgroundColor: string;
  $hoverColor: string;
  $textColor: string;
}>`
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #d3d3d3;
  background-color: white;
  border: solid 1px #d7d7d7;
  display: flex;
  .card-left {
    margin-right: 15px;
  }
  .card-right {
    padding: 0px;
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    .card-right-top {
      display: flex;
    }
    .card-right-title {
      font-size: 16px;
    }
    .card-right-value {
      span {
        color: #51a800;
      }
    }
    .card-right-date {
      margin-right: 15px;
    }
    .card-right-location {
      display: flex;
      margin-right: 15px;
    }
  }
  .actionAdd {
    margin: 0px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .actionAdd p {
    text-decoration: underline;
    margin: 0;
  }
`;

StyledCard.defaultProps = {
  $textColor: "var(--white)",
  $backgroundColor: "var(--primary)",
  $hoverColor: "var(--primary-hover)",
};
