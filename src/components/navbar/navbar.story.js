import React from "react";
import { storiesOf, withKnobs, addDecorator } from "@storybook/react";
import { Navbar, Item } from ".";
import { action } from "@storybook/addon-actions";
import { doc, withReadme } from "storybook-readme";
import README from "./README.md";

const handleClick = action("I just got clicked");

storiesOf("Navbar", module)
  .add("docs", doc(README))
  .add("Navbar", () => <Navbar brand="Harris Geo" onBrandClick={handleClick} />)
  .add("with children", () => (
    <Navbar brand="Harris Geo" onBrandClick={handleClick}>
      <Item onClick={handleClick}>Home</Item>
      <Item onClick={handleClick}>About</Item>
    </Navbar>
  ));
