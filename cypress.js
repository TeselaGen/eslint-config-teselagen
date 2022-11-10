require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  plugins: ["cypress", "no-only-tests", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  extends: ["./base-config.js", "plugin:cypress/recommended"],
  env: {
    "cypress/globals": true,
  },
  rules: {
    "no-only-tests/no-only-tests": [1, { fix: true }],
  },
};
