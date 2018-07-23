# Teselagen's shared linting config


## Installation

1. `yarn add -D install-peerdeps`
2. `yarn install-peerdeps eslint-config-teselagen --dev`

(select yes to install using yarn when prompted)


2. Add following block to `.eslintrc`
```
"extends": [
  "teselagen/react"
]
or 
"extends": [
  "teselagen/node" 
]
```


## Adding linting on precommit (recommended!)

Then add this to your package.json:
```
"scripts": {
  "precommit": "lint-staged"
},
"lint-staged": {
  "src/**/*.js": [
    "eslint --fix --max-warnings=0",
    "prettier --write",
    "git add"
  ]
},
```


For React.js projects, extend from `teselagen/react`
For Node.js projects, extend from `teselagen/node`
