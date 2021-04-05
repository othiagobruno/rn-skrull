module.exports = {
  root: true,
  env: {
    es6: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-len': ['warn', {code: 120, ignoreComments: true, ignoreStrings: true}],
    '@typescript-eslint/no-unused-vars': [2, {args: 'all', argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-empty-function': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}]
  }
};
