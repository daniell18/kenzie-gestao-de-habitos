import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "var(--purple4)" : "var(--black)")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "var(--black)" : "var(--white)")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) =>
      primary ? "var(--white)" : "var(--purple4)"};
    color: ${({ dark }) => (dark ? "var(--white)" : "var(--black)")};
  }
`;
