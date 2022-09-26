import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Header>
      <S.Container>
        <S.Box>
          <S.Box1>
            <S.Title>RC</S.Title>
          </S.Box1>
          <S.Box2>
            <a href="#">
              <S.Button>ABOUT</S.Button>
            </a>
            <a href="#">
              <S.Button>RECIPES</S.Button>
            </a>
            <a href="#">
              <S.Button>SUBSCRIBE</S.Button>
            </a>
          </S.Box2>
          <S.Menu>
            <S.Line></S.Line>
            <S.Line></S.Line>
          </S.Menu>
        </S.Box>
        <S.Main>
          <S.MainText>RECIPES</S.MainText>
        </S.Main>
      </S.Container>
    </S.Header>
  );
}
