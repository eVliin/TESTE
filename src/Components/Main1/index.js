import React from "react";
import bolo from "/src/Assets/img/bolo.png";
import pizza from "/src/Assets/img/pizza.png";
import nozes from "/src/Assets/img/pote.png";
import * as S from "./style";

export default function Main1() {
  return (
    <S.Main id="recipes">
      <S.Container>
        <S.Title>
          <h2>LATEST RECIPES</h2>
          <S.Barra />
        </S.Title>
        <S.CardFoods>
          <S.Food>
            <S.Images src={bolo} alt="Cake" />
            <S.ContentsFood>
              <section>
                <S.Barra />
                <h3>Red Velvet Cake</h3>
              </section>
            </S.ContentsFood>
          </S.Food>
          <S.Food>
            <S.Images src={pizza} alt="Pizza" />
            <S.ContentsFood>
              <section>
                <S.Barra />
                <h3>Margherita Pizza</h3>
              </section>
            </S.ContentsFood>
          </S.Food>
          <S.Food>
            <S.Images src={nozes} alt="Peanut Smoothie" />
            <S.ContentsFood>
              <section>
                <S.Barra />
                <h3>Peanut Smoothie</h3>
              </section>
            </S.ContentsFood>
          </S.Food>
        </S.CardFoods>
      </S.Container>
    </S.Main>
  );
}
