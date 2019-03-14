module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: false,
    es6: true,
    jest: true,
    "jest/globals": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jest"
  ],
  "parser": "babel-eslint",
  "globals": {
    process: true
  }
};
