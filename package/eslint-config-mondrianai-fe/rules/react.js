module.exports = {
  extends: ["plugin:react/recommended"],
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false },
    ],
    "react/display-name": 0,
  },
};
