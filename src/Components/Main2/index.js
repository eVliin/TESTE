import React from "react";
import * as S from "./style";
import Spoon from "/src/Assets/img/colher.png";

export default function Main2() {
  return (
    <S.Main id="about" >
      <S.SpoonImg src={Spoon} alt="colher" />
      <S.ContentsAbout>
        <div>
          <S.Title>
            <h2>About</h2>
            <S.Barra />
          </S.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
            tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
            dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
            quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
            sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Ut
            vestibulum nisl ante, et ultricies sapien facilisis aliquam.
          </p>
        </div>
      </S.ContentsAbout>
    </S.Main>
  );
}
