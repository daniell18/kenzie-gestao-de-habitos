import styled from "styled-components";
import sair from "../../Images/1725-exit-sign-outline.svg"
import logo3 from "../../Images/logo.svg"

export const ContainerBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  background-color: ${(props) => props.color};
  margin-top: 20vh;
  padding-top: 6vh;
`;
export const ParagrafoLogout = styled.p`
    text-align: center;
    color: white;
    margin-bottom:70px;
    font-size: x-large;
    font-weight: 600;
`;

export const ButtonPlus = styled.button `
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 60px;
  border: none;
  right: 35px;
  border-radius: 125px;
@media screen and (min-width: 1024px) {
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 100px;
  right: 170px;
  border-radius: 125px;}
@media screen and (min-width: 1440px) {
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 100px;
  right: 310px;
  border-radius: 125px;}
`;

export const GoHome = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 60px;
  border: none;
  left: 35px;
  border-radius: 125px;
@media screen and (min-width: 1024px) {
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 100px;
  left: 170px;
  border-radius: 125px;}
@media screen and (min-width: 1440px) {
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 100px;
  left: 310px;
  border-radius: 125px;}
`;

export const LogoutPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
`;

export const Sair = styled.button`
  background: transparent;
  width: 65px;
  height: 60px;
  border: none;
  background-image: url(${sair});
`;

export const LogoSair = styled.div`
    width: 320px;
    margin-bottom:30px;
    height: 100px;
  background-image: url(${logo3});
`;
