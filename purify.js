import purify from "purify-css";

const content = ["**/dist/*.html"];;
const css = ["**/dist/assets/*.css"];
let options = { minify: true };
purify(content, css, options);
