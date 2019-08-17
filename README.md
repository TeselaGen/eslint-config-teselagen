# Teselagen's shared linting config


## Installation
requires v6 of eslint or higher
1. `yarn add -D eslint eslint-config-teselagen`

(select yes to install using yarn when prompted)


2. Add the following to `.eslintrc.js`
```
require("eslint-config-teselagen/patch");
module.exports = {
	extends: "teselagen/react" //choose one of these 
	extends: "teselagen/node" //choose one of these 
	extends: "teselagen/es5" //choose one of these 
}
```

For React.js projects, extend from `teselagen/react`
For Node.js projects, extend from `teselagen/node`



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

## Changelog 
 ### v5 
 -We're now using a patch to simplify installation!
