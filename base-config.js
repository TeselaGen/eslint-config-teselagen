module.exports = {
  plugins: ["import"],
  rules: {
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
