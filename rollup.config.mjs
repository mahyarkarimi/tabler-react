import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import { dts } from "rollup-plugin-dts";
import css from "rollup-plugin-import-css";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
        name: 'react-lib',
        inlineDynamicImports: true,
      },
      {
        file: "dist/esm/index.js",
        format: 'esm',
        sourcemap: true,
        exports: "named",
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),  
      terser(),
      css()
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
