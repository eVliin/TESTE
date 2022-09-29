import React from "react";
import Header from "./Components/Header/index";
import Main1 from "./Components/Main1/index";
import Main2 from "./Components/Main2/index";
import Footer from "./Components/Footer/index";
import * as S from "./Components/GlobalStyle/GlobalStyle";

export default function App() {
  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <Header />
      <Main1 />
      <Main2 />
      <Footer />
    </S.Wrapper>
  );
}
