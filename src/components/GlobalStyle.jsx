import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
   font-family: Roboto, sans-serif;

   text-align: center;
   padding-top: 30px;
   padding-bottom: 30px;
   color: ${p => p.theme.colors.primary};
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: ${p => p.theme.colors.white};
}
 ul {
    margin: 0;
    padding: 0;
    list-style: none;
 }
 img {
   display: block;
   width:100%;
 }
 button {
   cursor: pointer;
   transition: all 200ms linear;
   &:hover, &:focus {
      background-color: #95afd8;
      color: white;
   }
 }
`;
