module.exports = {
  "plugins": [
    "cypress",
    "no-only-tests"
  ],
  "extends": [
    "plugin:cypress/recommended"
  ],
  "env": {
    "cypress/globals": true
  },
  "rules": {
    "no-only-tests/no-only-tests": 1
  }
}