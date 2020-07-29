module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "./rules/errors.js",
    "./rules/imports.js",
    "./rules/production.js",
    "./rules/mondrianai.js",
  ].map(require.resolve),
  rules: {},
};
