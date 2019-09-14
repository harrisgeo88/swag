import React from "react";
import { storiesOf, withKnobs, addDecorator } from "@storybook/react";
import { Navbar, NavItem } from ".";
import { action } from "@storybook/addon-actions";
import { doc, withReadme } from "storybook-readme";
import README from "./README.md";

const handleClick = action("I just got clicked");

storiesOf("Navbar", module)
  .add("docs", doc(README))
  .add("Navbar", () => <Navbar title="Harris Geo" onTitleClick={handleClick} />)
  .add("with nav items", () => (
    <Navbar title="Harris Geo" onTitleClick={handleClick}>
      <NavItem onClick={handleClick}>Home</NavItem>
      <NavItem onClick={handleClick}>About</NavItem>
    </Navbar>
  ));
