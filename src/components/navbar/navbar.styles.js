import styled from "styled-components";

// TODO: introduce proper token system
const margin = "10px";
const vertical = "20px";
const navHeight = "40px";
const horizontal = margin;

export const NavWrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  background: #333;
  height: ${navHeight};
  border-bottom: ${props => (props.dark ? "1px solid #eee" : 0)};
`;

export const Left = styled.span`
  display: flex;
  align-items: center;
  text-decorate: none;
  width: 100%;
`;

export const Right = styled(Left)`
  justify-content: flex-end;
`;

export const NavItem = styled.a`
  color: #eee;
  margin: 0 ${vertical};
  text-decoration: none;
  cursor: pointer;
  scroll-behavior: smooth;
`;
