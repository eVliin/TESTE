import styled from "styled-components";

export const Main = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const SpoonImg = styled.img`
  height: 100%;
  width: 50%;
  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const ContentsAbout = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:first-child {
    width: 30vw;
    height: 24.844vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  p {
    text-align: left;
    letter-spacing: 0px;
    color: #373737;
    font-family: "Roboto", Regular;
  }
  h2 {
    font-size: 40px;
    letter-spacing: 1.72px;
    color: #373737;
    font-family: "Hurmer  Geometric Sans 1", SemiBold;
  }
  @media screen and (max-width: 850px) {
    height: 176.087vw;
    width: 100%;
    div:first-child {
      height: 165.459vw;
      width: 92.271vw;
    }
  }
`;

export const Title = styled.section`
  min-height: 4.245vw;
  font-size: 1.042vw;
  font-weight: 600;
  letter-spacing: 0.09vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #373737;
  font-family: "Hurmer  Geometric Sans 1", SemiBold;
  @media screen and (max-width: 850px) {
    width: 34.541vw;
    height: 19.686vw;
  }
`;

export const Barra = styled.div`
  width: 2.656vw;
  border-bottom: 6px solid #373737;
  @media screen and (max-width: 850px) {
    width: 17.15vw;
  }
`;
