import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary: #0099ff;
    --primary-hover: #65b7ed;
    --text-color: #060606;
    --white: #ffffff;
    --gray-hover: #ebebeb;
  }
  body {
    color: var(--text-color);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(235,235,235,1) 0%, rgba(255,255,255,1) 100%);
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "slnt" 0;    
    background-color: #fff;
  }
  
  h2{
    font-size: 24px;
  }
  a{
    text-decoration: none;
    color: var(--text-color);
    &:hover{
      cursor: pointer; 
    }
  }
  button{
    border: none;
    &:hover{
      cursor: pointer;
    }
  }
  main{
    max-width: 1400px;
    margin: auto;
    padding: 20px;
  }

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px grey;
    box-shadow: inset 0 0 5px grey;
}

::-webkit-scrollbar-thumb {
    background: #0099ff;
}

::-webkit-scrollbar-thumb:hover {
    background: #33475b;
}
`;

export default GlobalStyle;
