import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: 'Roboto';
        font-weight: 400;
    }
`;

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: #f2f4f1;
  height: 100vh;
  overflow: scroll;
`;
