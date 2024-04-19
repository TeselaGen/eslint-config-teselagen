module.exports = {
  plugins: ["import"],
  rules: {
    "no-const-assign": 2,
    "no-var": 2,
    "no-console": [1, { allow: ["warn", "error", "info"] }],
    "no-debugger": 2,
    "no-empty": [2],
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 1,
    "no-inner-declarations": [2, "functions"],
    "no-undef": 2,
    "no-unneeded-ternary": 1,
    "no-unsafe-negation": 2,
    "no-restricted-globals": ["error", "name", "location"],
    "no-redeclare": 2,
    "comma-dangle": 0,
    "no-mixed-spaces-and-tabs": 0,
    "linebreak-style": [0, "unix"],
    "import/no-unresolved": 2,
    "import/no-anonymous-default-export": 0,
    "import/named": 2,
    "import/default": 2,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [1, { ignoreRestSiblings: true }],
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
};
