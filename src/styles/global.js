const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    background-color: #000;
    color: #fff;
    font-family: Ubuntu;
  }

  #root, html, body {
    height: 100%;
    width: 100%;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: color 0.5s;
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
