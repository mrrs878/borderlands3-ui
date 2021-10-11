/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-08-20 11:26:26
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-08-25 21:16:34
 * @FilePath: \gear\.eslintrc.js
 */
module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: ['**/dist/*', '**/lib/*'],
  rules: {
    'linebreak-style': ['off', 'window'],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react-hooks/exhaustive-deps': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'react/destructuring-assignment': [0],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
