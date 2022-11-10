require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["react-app", "./base-config.js", "./node-react-config.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    browser: true,
    mocha: true,
  },
  rules: {
    "no-redeclare": 2,
    "comma-dangle": 0,
    "no-mixed-spaces-and-tabs": 0,
    "linebreak-style": [0, "unix"],
  },
};
