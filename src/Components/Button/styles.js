import styled from "styled-components";

export const ButtonItem = styled.button`
  position: relative;
  border-block: none;
  font-size: 24px;
  font-weight: bold;
  color: var(--white);
  letter-spacing: 1.5px;
  bottom: 0px;
  width: 300px;
  height: 60px;
  left: 0;
  right: 0;
  border-radius: 10px;
  background-color: var(--purple4);
  &:hover{
    background-color:white;
    color:black;
    border: 1px solid black;
  }
`;