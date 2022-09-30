import React, { useState } from "react";
import * as S from "./barStyle";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import logo from "/src/Assets/img/RC.png";

const Bar = () => {
  const [bar, setBar] = useState(false);

  const change = (prevBar) => {
    setBar(!bar);
  };

  return (
    <div>
      {bar ? (
        ""
      ) : (
        <S.Menu onClick={change}>
          <S.Logo src={logo} />
        </S.Menu>
      )}
      {bar && (
        <S.Box>
          <S.Menu onClick={change}>X</S.Menu>
          <BrowserRouter>
            <S.Box2>
              <Link to="/pathLink#recipes">
                <S.Button onClick={change}>RECIPES</S.Button>
              </Link>
              <Link to="/pathLink#about">
                <S.Button onClick={change}>ABOUT</S.Button>
              </Link>
              <Link to="/pathLink#subscribe">
                <S.Button onClick={change}>SUBSCRIBE</S.Button>
              </Link>
            </S.Box2>
          </BrowserRouter>
        </S.Box>
      )}
    </div>
  );
};

export default Bar;
