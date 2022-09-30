import styled from "styled-components";

export const Main = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13.021vw 0 13.021vw 0;
`;

export const Container = styled.div`
  position: relative;
  min-height: 50.208vw;
  width: 89.74vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
  @media screen and (max-width: 850px) {
    height: 440vw;
  }
`;

export const Title = styled.div`
  height: 4.245vw;
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.09vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #373737;
  font-family: "Hurmer  Geometric Sans 1", Regular;
  @media screen and (max-width: 850px) {
    height: 20.652vw;
    font-size: 2em;
    font-family: "Hurmer  Geometric Sans 1", Regular;
  }
`;

export const CardFoods = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: 409.42vw;
  }
`;

export const Food = styled.div`
  width: 27.917vw;
  height: 40.521vw;
  background: #ffffff;
  box-shadow: 0px 7px 6px #00000029;
  @media screen and (max-width: 850px) {
    width: 92.271vw;
    height: 134.058vw;
  }
`;

export const ContentsFood = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    width: 12.292vw;
    height: 3.88vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 850px) {
    section {
      width: 57.005vw;
      height: 17.995vw;
    }
  }
`;

export const Images = styled.img`
  width: 100%;
`;

export const Barra = styled.div`
  width: 2.656vw;
  border-bottom: 6px solid #373737;
  @media screen and (max-width: 850px) {
    width: 25.121vw;
  }
`;
