import React from "react";
import * as S from "../style";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import logo from "/src/Assets/img/RC.png";

const Heade = () => {
  return (
    <S.Box>
      <S.Logo src={logo} />
      <BrowserRouter>
        <S.Box2>
          <Link to="/pathLink#recipes">
            <S.Button>RECIPES</S.Button>
          </Link>
          <Link to="/pathLink#about">
            <S.Button>ABOUT</S.Button>
          </Link>
          <Link to="/pathLink#subscribe">
            <S.Button>SUBSCRIBE</S.Button>
          </Link>
        </S.Box2>
      </BrowserRouter>
    </S.Box>
  );
};

export default Heade;
