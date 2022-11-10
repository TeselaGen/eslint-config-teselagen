require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["./base-config.js", "./node-react-config.js", "react-app"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-const-assign": 2,
    "react/jsx-boolean-value": 0,
    "react/jsx-key": 2,
  },
};
