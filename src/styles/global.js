const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html {
    min-height: 100vh;
  }

  #root, html, body {
    height: 100%;
    width: 100%;
  }
  body {
    background-color: #000;
    color: #fff;
    font-family: Ubuntu;


    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }
  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: color 0.2s;
  }

   /* width */
   ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #000;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #232129;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #36313d;
  }
`;

export default GlobalStyles;
