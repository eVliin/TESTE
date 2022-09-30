import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style: none;
    }
    ::selection {
  color: white;
  background-color: #373737;
}
::-webkit-scrollbar-track {
  background-color: #F2F4F1;
}
::-webkit-scrollbar {
  width: 1.5vh;
}
::-webkit-scrollbar-thumb {
  background: #373737;
}
`;

export const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  overflow: scroll;
  background-color: #f2f4f1;
`;
