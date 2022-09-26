import React from "react";
import Header from "./components/Header/index";
import Main1 from "./components/Main1/index";
import Main2 from "./Components/Main2/index";
import Footer from "./Components/Footer/index";
import { GlobalStyle } from "./components/global/style";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main1 />
      <Main2 />
      <Footer />
    </div>
  );
}
