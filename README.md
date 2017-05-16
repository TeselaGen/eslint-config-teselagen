# eslint-config-teselagen
```
yarn add --save-dev eslint-config-teselagen eslint-config-react-app babel-eslint@7.1.1 eslint@3.16.1 eslint-plugin-flowtype@2.21.0 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@4.0.0 eslint-plugin-react@6.4.1
```

Then create a file named .eslintrc with following contents in the root folder of your project:

```
{
  "extends": "teselagen"
}
```

## add prettier:
`yarn add --save-dev lint-staged prettier`

then add this to your package.json:

"lint-staged": {
  "src/**/*.js": [
    "prettier --write",
    "git add"
  ],
},