module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": 0,
  },
};
