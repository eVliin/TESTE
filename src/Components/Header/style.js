import styled from "styled-components";
import background from "/src/Assets/img/fundo.png";

export const Logo = styled.img`
  width: 3.542vw;
`;

export const Header = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Container = styled.div`
  position: relative;
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-position: 82% 50%;
  background-size: cover;
  z-index: 0;
`;

export const Box = styled.div`
  position: fixed;
  top: 2%;
  width: 94%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.865vw;
  z-index: 100;
`;

export const Box2 = styled.nav`
  width: min-content;
  display: flex;
  justify-content: space-between;
  button:focus {
    border: solid black;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  height: 100%;
  text-align: center;
  padding: 1.302vw 3.125vw;
  font-family: "Hurmer  Geometric Sans 1", SemiBold;
`;

export const Main = styled.div``;

export const MainText = styled.div`
  font-size: 9.896vw;
  letter-spacing: 0.82vw;
  color: #373737;
  font-family: "Hurmer  Geometric Sans 1", SemiBold;
`;
