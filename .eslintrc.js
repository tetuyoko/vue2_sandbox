module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2018,
  },
  'plugins': [
    'prettier',
    'node',
    'import',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  'rules': {
    'node/no-unsupported-features': 0,
    'no-console': 0,
    'quotes': [2, 'single', { allowTemplateLiterals: true }],
    "prettier/prettier": ["error", { "singleQuote": true }],
  },
  'overrides': [
    {
      'files': ['**/*.js'],
      'rules': {
        'node/no-unsupported-features/es-syntax': 'off',
      }
    },
    {
      'files': ['webpack/*'],
      'rules': {
        'node/no-unpublished-require': 'off',
      }
    }
  ]
};
