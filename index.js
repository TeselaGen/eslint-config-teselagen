module.exports = {   
  "globals": {
    "toastr": true
  },
  "extends": ["react-app"],
  rules: {
    'react/jsx-boolean-value': [1, 'never'],
    'no-debugger': 2,
    'no-empty': [2, { "allowEmptyCatch": true }],
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 1,
    'no-inner-declarations': [2, 'functions'],
    'no-undef': 2,
    'no-unneeded-ternary': 1,
    'no-unsafe-negation': 2,
    'no-unused-vars': [
      1,
      { ignoreRestSiblings: true }
    ],
    'no-var': 1,
    'object-shorthand': [1, 'properties'],
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2
  }
}