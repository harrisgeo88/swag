import React from "react";
import { NavbarWrapper, Left, Item, Right } from "./";

export const Navbar = ({ brand = "", onBrandClick = null, children }) => (
  <NavbarWrapper>
    <Left>
      <Item onClick={onBrandClick}>{brand}</Item>
    </Left>
    <Right>{children}</Right>
  </NavbarWrapper>
);
