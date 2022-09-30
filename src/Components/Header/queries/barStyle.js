import styled from "styled-components";

export const Logo = styled.img`
  width: 10vw;
`;

export const Menu = styled.button`
  position: absolute;
  top: 3vw;
  right: 2vw;
  width: 15vw;
  height: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-radius: 5vw;
  background: rgba(0, 0, 0, 0.15);
  font-size: 10vw;
  text-align: center;
  z-index: 100;
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
`;

export const Box = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  border-radius: 10% 0% 0% 10%;
  padding: 1vw;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
`;

export const Box2 = styled.nav`
  width: min-content;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  height: 100%;
  text-align: center;
  padding: 1.302vw 3.125vw;
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 5vw;
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
`;
