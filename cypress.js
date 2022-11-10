require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["cypress", "no-only-tests", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  extends: ["plugin:cypress/recommended"],
  env: {
    "cypress/globals": true,
  },
  rules: {
    "no-only-tests/no-only-tests": [1, { fix: true }],
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [1, { ignoreRestSiblings: true }],
  },
};
