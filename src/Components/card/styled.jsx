import styled from "styled-components";


export const Conteiner = styled.div`
  width: 40vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #212324;
  margin-top: 2vh;
  border-radius: 10px;
  padding: 10px;
  color: white;
  @media screen and (min-width: 800px) {
    width: 40vw;
  }
`;
export const Conteinerfull = styled.div`
  width: 30vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #212324;
  margin-top: 2vh;
  border-radius: 10px;
  padding: 10px;
  color: white;
  @media screen and (min-width: 800px) {
    width: 40vw;
  }
`;
export const ContainerGroups = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
`;
export const CheckIn = styled.button`
  border-radius: 50px;
  width: 40px;
  font-size: 10px;
`;

export const Delete = styled.button`
  border-radius: 50px;
  width: 40px;
  font-size: 10px;
`;

export const ConteinerCard = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  text-align: center;
  /* @media screen and (min-width: 800px) {
    text-align: end;
  } */
`;
export const Conteinername = styled.div``;
export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    margin-left: 10px;
    color: #949595;
    font-size: 12px;
  }
  /* @media screen and (min-width: 800px) {
    flex-direction: column;
    align-items: flex-end;
    p {
      color: white;
    }
  } */
`;
export const Progress = styled.div`
  width: 100%;
  height: 3px;
  background-color: #444545;
  div {
    width: ${({ number }) => number}%;
    height: 100%;
    background-color: ${({ color }) => color};
  }
  /* @media screen and (min-width: 800px) {
    height: 7px;
    border: solid 1.8px white;
    border-radius: 3px;
    background-color: ${({ color }) => color};
    div {
      background-color: #444545;
    }
  } */
`;
export const ButtonSeeMore = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 10px;
  margin-top: 3px;
  border: none;
  font-weight: 600;
  &:hover {
    color: white;
    background-color: var(--purple3);
  }
`;
