require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["./base-config.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    browser: true,
    mocha: true,
  },
};
