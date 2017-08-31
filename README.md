# eslint-config-teselagen
```
yarn add --dev eslint-config-teselagen eslint-config-react-app babel-eslint@7.2.3 eslint eslint-plugin-flowtype@2.33.0 eslint-plugin-import@2.2.0 eslint-plugin-jsx-a11y@5.0.1 eslint-plugin-react@7.0.1
```

Then create a file named .eslintrc with following contents in the root folder of your project:

```
{
  "extends": "teselagen"
}
```

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