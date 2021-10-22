import styled from "styled-components";

export const LogoDesk = styled.img`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    top: 25px;
    position: absolute;
    left: 25px;
  }
`;

export const JoinGroup = styled.button`
  position: fixed;
  top: 70px;
  right: 50px;
  @media screen and (min-width: 1024px) {
    position: fixed;
    top: 105px;
    right: 50px;
  }
`;
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
  @media screen and (min-width: 1024px) {
    position: absolute;
    right: 50px;
    top: 25px;
  }
`;

export const ButtonEdit = styled.button`
  position: fixed;
  right: 350px;
`;
export const FormContainer = styled.form``;
export const Button2 = styled.button`
  position: fixed;
  right: 350px;
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;
export const Button3 = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;

export const ContainerInfo = styled.div`
  display: flex;
  margin-left: 3vw;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  @media screen and (min-width: 1024px) {
    position: fixed;
    right: 120px;
    top: 25px;
  }
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
