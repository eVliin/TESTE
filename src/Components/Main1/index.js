import React from "react";
import * as S from "./style"

export default function Main1(){
    return(
      <S.Main>
        <S.Title>
          <h1>LATEST RECIPES</h1>
          <h1>___</h1>
        </S.Title>
        <S.CardFoods>
          <S.Food>
            <S.Images src=# alt='Cake'/>
            <S.ContentsFood>
              <h1>___</h1>
              <h1>Red Velvet Cake</h1>
            </S.ContentsFood>
          </S.Food>
          <S.Food>
            <S.Images src=# alt='Cake'/>
            <S.ContentsFood>
              <h1>___</h1>
              <h1>Margherita Pizza</h1>
            </S.ContentsFood>
          </S.Food>
          <S.Food>
            <S.Images src=# alt='Cake'/>
            <S.ContentsFood>
              <h1>___</h1>
              <h1>Peanut Smoothie</h1>
            </S.ContentsFood>
          </S.Food>
        </S.CardFoods>
      </S.Main>  
    )
} 