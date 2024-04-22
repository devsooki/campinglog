import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Nanum Gothic', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #dbead5;
  }
  ul,li {
    list-style: none;
  }
  input, textarea {
    outline: none;
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;