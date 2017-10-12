
## Installation

1. `yarn add -D eslint eslint-config-teselagen`
2. `yarn install-peerdeps eslint-config-teselagen --dev --only-peers`
2. Add following block to `.eslintrc`



For React.js projects, extend from `teselagen/react`
For Node.js projects, extend from `teselagen/node`

Then add this to your package.json:
```
"eslintConfig": {
  "extends": [
    "teselagen/react" or "teselagen/node" 
  ]
},
"scripts": {
  "precommit": "lint-staged"
},
"lint-staged": {
  "src/**/*.js": [
    "prettier --write",
    "git add"
  ]
},
```