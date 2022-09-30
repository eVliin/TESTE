import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style: none;
    }
`;

export const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  overflow: scroll;
  background-color: #f2f4f1;
`;
