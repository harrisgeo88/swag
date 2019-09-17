import React from "react";
import { NavWrapper, Left, NavItem, Right } from "./navbar.styles";

export const Navbar = ({
  title = "",
  onTitleClick = null,
  dark = false,
  children
}) => (
  <NavWrapper dark={dark}>
    <Left>
      <NavItem onClick={onTitleClick}>{title}</NavItem>
    </Left>
    <Right>{children}</Right>
  </NavWrapper>
);
