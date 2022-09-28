import React from "react";
import Header from "./Components/Header/index";
import * as S from "./Components/GlobalStyle/GlobalStyle";

export default function App() {
  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <Header />
    </S.Wrapper>
  );
}
