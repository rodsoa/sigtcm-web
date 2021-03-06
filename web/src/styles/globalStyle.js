import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html {
      font-size: 62.5%;
  }
  html {
    min-height: 100% !important;
  }

  #root {
    position: fixed;
    overflow: auto;
    width: 100%;
    height: 100%;
    animation-name: root;
    animation-duration: 1s;
  }
  @keyframes root {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  body {
    background: linear-gradient(180deg, #fff 0%, #98AECF 100%);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: #444;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
