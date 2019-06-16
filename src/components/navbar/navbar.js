import React from "react";
import { NavWrapper, Left, NavItem, Right } from "./navbar.styles";

export const Navbar = ({ title = "", onTitleClick = null, children }) => (
  <NavWrapper>
    <Left>
      <NavItem onClick={onTitleClick}>{title}</NavItem>
    </Left>
    <Right>{children}</Right>
  </NavWrapper>
);
