/* eslint-disable import/no-extraneous-dependencies */
import purify from "purify-css";

const content = ["**/dist/*.html"];
const css = ["**/dist/assets/*.css"];
const options = { minify: true };
purify(content, css, options);
