module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["import"],
  extends: ["plugin:import/warnings", "plugin:import/errors"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": 0,
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": 0,
  },
};
