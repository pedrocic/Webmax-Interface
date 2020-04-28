import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 body {
     font-family: Arial, Helvetica, sans-serif;
     font-size: 14px;
     color: black;
     background-color: #eeeeee;
     text-rendering: optimizeLegibility;
     -webkit-font-smoothing: antialiased;
 }

`;
