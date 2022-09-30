import React from "react";
import * as S from "./style";
import Heade from "./queries/Header.js";
import Bar from "./queries/bar.js";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <S.Header id="home">
      {isPortrait ? <Bar /> : <Heade />}
      <S.Container>
        <S.Main>
          <S.MainText>RECIPES</S.MainText>
        </S.Main>
      </S.Container>
    </S.Header>
  );
}
