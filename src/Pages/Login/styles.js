import styled from "styled-components";
import img from "../../Images/motivation_words_inscription_176647_3840x2160.jpg"

export const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
  z-index: 500;
  height: 100vh;
  background-color: var(--purple4);
  @media screen and (min-width: 900px){
    background-image: url(${img})};
    background-size: cover;
    background-position-x: center;
`;

export const Paragrafo = styled.p`
  color: white;
  a{
    color: var(--purple2);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95vw;
  max-width: 300px;
  max-height: 661px;
  @media screen and (min-width: 900px){
    background-color: #00000080;
    max-width: 500px;
    height: 400px;
    border-radius: 25px;
    }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  max-height: 661px;
  transform: translateY(0px);
  > h1 {
    font-size: 32px;
    font-weight: bold;
    align-self: center;
    margin-bottom: 20px;
    color: white;
  }
  > div > input {
    font-size: 16px;
    margin-bottom: 20px;
  }
  > p {
    font-size: 16px;
    margin-bottom: 20px;
    a {
      font-weight: 700;
      &:hover {
        color: var(--purple3);
      }
    }
  }
  > div > button {
    margin-left: auto;
    margin-right: 0;
  }
`;
export const Logo = styled.img`
top: 25px;
position: absolute;
@media screen and (min-width: 900px){
  display: none;
left:0px;
top: 25px;
}
`

export const Logo2 = styled.img`
display: none;
@media screen and (min-width: 900px){
  display: block;
  top: 25px;
  position: absolute;
  left:25px;
  top: 25px;
}
`
export const InputItem = styled.input`
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
`;

export const ErrorSpan = styled.span`
  position: absolute;
  top: 41px;
  font-size: 14px;
`;
