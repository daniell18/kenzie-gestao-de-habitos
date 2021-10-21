import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #212324;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;
export const ContainerInfo = styled.div`
  display: flex;
  margin-left: 3vw;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  margin-top: 2px;
  p {
    color: white;
    font-size: 14px;
    margin: 10px;
    font-family: "Encode sans";
    font-weight: bold;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 2vh;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const NavMenu = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  font-weight: bold;
  bottom: -15px;
  justify-content: space-evenly;
`;
export const NavHome = styled.div`
  width: 85px;
  height: 30px;
  background-color: #4da7ad;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  @media screen and (min-width: 700px) {
    width: 180px;
  }
`;
export const NavGroup = styled.div`
  width: 85px;
  height: 30px;
  background-color: #7e42c2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  @media screen and (min-width: 700px) {
    width: 180px;
  }
`;
export const NavLogout = styled.div`
  width: 85px;
  height: 30px;
  background-color: #e2b1b1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  @media screen and (min-width: 700px) {
    width: 180px;
  }
`;
export const Button = styled.button`
  margin-right: 15px;
  margin-top: -11px;
`;
