module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es6': true,
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2019,
  },
  'plugins': [
    'prettier',
    'import',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  'rules': {
    'no-console': 0,
    'quotes': [2, 'single', { allowTemplateLiterals: true }],
    "prettier/prettier": ["error", { "singleQuote": true }],
  },
};
