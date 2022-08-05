require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["cypress", "no-only-tests"],
  extends: ["plugin:cypress/recommended"],
  env: {
    "cypress/globals": true,
  },
  rules: {
    "no-only-tests/no-only-tests": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "no-unused-vars": 0,
  },
};
