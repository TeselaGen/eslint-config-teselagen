
## Installation

1. `yarn add -D install-peerdeps eslint eslint-config-teselagen`
2. `yarn install-peerdeps eslint-config-teselagen --dev --only-peers`


2. Add following block to `.eslintrc`
```
"extends": [
  "teselagen/react" or "teselagen/node" 
]
```


Then add this to your package.json:
```
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


For React.js projects, extend from `teselagen/react`
For Node.js projects, extend from `teselagen/node`