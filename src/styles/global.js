const { createGlobalStyle } = require('styled-components');

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    transition: color 0.2s;
  }

  *{
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
