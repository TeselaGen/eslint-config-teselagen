require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "./base-config.js", "./node-react-config.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-const-assign": 2,
    "react/jsx-boolean-value": 0,
    "react/jsx-key": 2,
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/anchor-is-valid": "off",
    "react/no-this-in-sfc": "warn",
    "react-hooks/rules-of-hooks": "error"
  },
  env: {
    browser: true,
    node: true
  }
};
