import React from "react";
import * as S from "./style"

export default function Main2(){
    return(
      <S.Main>
        <S.AboutConteiner>
          <S.SpoonImg src={Spoon}/>
          <S.ContentsAbout>
            <h1>About</h1>
            <h1>___</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
          </S.ContentsAbout>
        </S.AboutConteiner>
     <S.Main />
    )
  }