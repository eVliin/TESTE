import React from "react";
import * as S from "./style";
import { BrowserRouter } from "react-router-dom";
import insta from "/src/Assets/img/insta.png";
import twt from "/src/Assets/img/twitter.png";
import face from "/src/Assets/img/face.png";
import pinterest from "/src/Assets/img/pint.png";

export default function Footer() {
  return (
    <S.Footer>
      <S.Container1>
        <S.Form id="subscribe">
          <S.Section1>
            <S.Title>SUBSCRIBE</S.Title>
            <S.P>Sign up for newsletter</S.P>
          </S.Section1>
          <S.Section2>
            <S.Input type="email" placeholder="Your Email"></S.Input>
            <S.Button type="submit">SUBMIT</S.Button>
          </S.Section2>
        </S.Form>
      </S.Container1>
      <S.Container2>
        <S.Box1>
          <S.Section3>
            <a href="#">
              <S.Icon src={insta} alt="Instagram" />
            </a>
            <a href="#">
              <S.Icon src={twt} alt="Twitter" />
            </a>
            <a href="#">
              <S.Icon src={face} alt="Facebook" />
            </a>
            <a href="#">
              <S.Icon src={pinterest} alt="Pinterest" />
            </a>
          </S.Section3>
        </S.Box1>
        <S.Box2>
          <BrowserRouter>
            <S.Ul>
              <S.Li to="/pathLink#home">
                <p>HOME</p>
              </S.Li>
              <S.Li to="/pathLink#recipes">
                <p>RECIPES</p>
              </S.Li>
              <S.Li to="/pathLink#about">
                <p>ABOUT</p>
              </S.Li>
              <S.Li to="/pathLink#subscribe">
                <p>SUBSCRIBE</p>
              </S.Li>
            </S.Ul>
          </BrowserRouter>
        </S.Box2>
      </S.Container2>
      <S.Container3>
        <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
          Referência:
          <a href="https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/">
            https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
          </a>
        </p>
      </S.Container3>
    </S.Footer>
  );
}
