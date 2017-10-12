module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    browser: true,
    mocha: true
  },
  rules: {
    "no-undef": 2,
    "no-console": 0,
    "no-unused-vars": 1,
    "no-redeclare": 2,
    "comma-dangle": 0,
    "no-mixed-spaces-and-tabs": 0,
    indent: [0, "tab"],
    quotes: [0, "double"],
    "linebreak-style": [0, "unix"],
    semi: [0, "always"],

    "no-var": 2,
    "no-debugger": 2,
    "no-empty": [2],
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 1,
    "no-inner-declarations": [2, "functions"],
    "no-undef": 2,
    "no-unneeded-ternary": 1,
    "no-unsafe-negation": 2,
    "no-unused-vars": [1, {
      ignoreRestSiblings: true
    }],
    "no-var": 1,
    "object-shorthand": [1, "properties"],
    "import/no-unresolved": 2,
    "import/named": 2,
    "import/default": 2
  }
};