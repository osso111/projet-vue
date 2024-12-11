module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false, // Disables the need for a Babel config file
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
};
