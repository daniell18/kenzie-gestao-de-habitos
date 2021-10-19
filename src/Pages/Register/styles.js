import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
  z-index: 500;
  height: 100vh;
  background-color: var(--purple4);
`;

export const Paragrafo = styled.p`
  color: white;
  a{
    color: white;
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
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(0px);
  > h1 {
    font-size: 32px;
    font-weight: bold;
    align-self: center;
    margin-bottom: 20px;
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
        color: var(--purple4);
      }
    }
  }
  > div > button {
    margin-left: auto;
    margin-right: 0;
  }
`;
export const Logo = styled.img`
width: 100%;
top: -180px;
position: absolute;
`