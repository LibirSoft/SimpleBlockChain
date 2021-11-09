module.exports = {
  extends: ["alloy", "alloy/typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    node: true,
    // mocha: true,
    jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // 'indent': ['error', 2],
    // 'quotes': ['error', 'single'],
    "prettier/prettier": "error",
    "spaced-comment": ["error", "always", { markers: ["/"] }],
  },
};
