import styled from "styled-components";

const margin = "10px";
const vertical = "20px";
const horizontal = margin;

export const NavWrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  background: #333;
`;

export const Left = styled.div`
  display: flex;
  text-decorate: none;
  width: 100%;
`;

export const Right = styled(Left)`
  justify-content: flex-end;
`;

export const NavItem = styled.a`
  color: #eee;
  margin: ${horizontal} ${vertical};
  text-decoration: none;
  cursor: pointer;
  scroll-behavior: smooth;
`;
