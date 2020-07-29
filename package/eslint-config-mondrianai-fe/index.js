module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "./rules/errors.js",
    "./rules/imports.js",
    "./rules/production.js",
    "./rules/mondrianai.js",
    "./rules/typescript.js",
    "./rules/react.js",
  ].map(require.resolve),
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    jest: true,
  },
};
