import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const Footer = styled.footer`
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
  width: 100%;
  height: 80vh;
  background: #dfe4de;
`;

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 50vh;
  width: 100%;
`;

export const Section1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 25vh;
`;

export const Section2 = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 50vh;
  width: 100%;
`;

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 850px) {
    height: 131.884vw;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const Box1 = styled.div`
  background: #f2f4f1;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: min-content;
    margin-top: 15.459vw;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  letter-spacing: 5px;
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
`;

export const P = styled.p`
  font-weight: 300;
  letter-spacing: 2px;
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
`;

export const Input = styled.input`
  width: 70%;
  height: 3vh;
  padding: 5vh 0 5vh 5vh;
  outline: none;
  border: 4px solid whitesmoke;
  font-size: 1em;
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
  &::placeholder {
    font-weight: 400;
    font-family: 'Hurmer  Geometric Sans 1', SemiBold;
  }
`;

export const Button = styled.button`
  background: none;
  border: 4px solid #373737;
  padding: 15px 45px;
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
  font-size: 1em;
  cursor: pointer;
  transition: 1s all;
  font-weight: 400;
  letter-spacing: 3px;
  &:hover {
    background: #373737;
    color: #fff;
    border-radius: 5px;
  }
`;

export const Section3 = styled.section`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled.img`
  max-width: 90%;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const Box2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    height: 44.928vw;
    flex-direction: column;
  }
`;

export const Li = styled(Link)`
  font-size: 1.2em;
  letter-spacing: 3px;
  text-decoration: none;
  p {
    color: #373737;
    font-family: 'Hurmer  Geometric Sans 1', SemiBold;
    transition: 1s all;
    &:hover {
      font-weight: bold;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Container3 = styled.div`
  display: flex;
  background: #446061;
  width: 100%;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  font-size: 0.9em;
  font-family: 'Hurmer  Geometric Sans 1', SemiBold;
  color: #ffffff90;
  word-break: break-all;
  a {
    color: #ffffff90;
    text-decoration: none;
  }
`;
