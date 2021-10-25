import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "var(--grey)" : "var(--purple4)")};
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
    background: ${({ primary }) => (primary ? "var(--white)" : "var(--white)")};
    color: ${({ dark }) => (dark ? "var(--white)" : "var(--black)")};
  }
`;

export const ButtonR = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "var(--grey)" : "var(--purple4)")};
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

  a {
    text-decoration: none;
  }

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? "var(--white)" : "var(--white)")};
    color: ${({ dark }) => (dark ? "var(--white)" : "var(--black)")};
  }
`;
