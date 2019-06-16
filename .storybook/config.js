import { configure, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

const req = require.context("../src/", true, /story\.(js)$/);

function loadStories() {
  require("../src/index.story.js");
  req.keys().forEach(req);
}

configure(loadStories, module);
