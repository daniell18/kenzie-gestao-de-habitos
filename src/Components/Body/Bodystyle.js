import styled from "styled-components";
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
