import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const dist = "dist";

import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  external: ["react", "styled-components"],
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "esm"
    },
    {
      name: "SWAG",
      file: `${dist}/bundle.umd.js`,
      globals: {
        react: "React",
        "styled-components": "styled"
      },
      format: "umd"
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    production && terser()
  ]
};
