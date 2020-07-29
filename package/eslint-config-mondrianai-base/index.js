module.exports = {
  extends: ["eslint-config-airbnb-base", "./rules/errors.js"].map(
    require.resolve
  ),
  rules: {},
};
