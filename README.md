
## Installation

1. `npm install --save-dev eslint eslint-config-okonet`
2. Add following block to `.eslintrc`

```json
    "extends": [
      "teselagen/react" or "teselagen/node" 
    ]
```

This will add generic config.

For React.js projects, extend from `teselagen/node`

For Node.js projects, extend from `teselagen/node`


## add prettier:
`yarn add --dev husky lint-staged prettier`

then add this to your package.json:
```
"scripts": {
  "precommit": "lint-staged",
},
"lint-staged": {
  "src/**/*.js, test/**/*.js": [
    "prettier --write",
    "git add"
  ]
}
```