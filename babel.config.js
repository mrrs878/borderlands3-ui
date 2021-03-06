/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-08-18 20:47:59
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-22 15:07:33
 * @FilePath: \borderlands3-ui\babel.config.js
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: { ie: 9 },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: true },
          },
        ],
      ],
    },
    production: {
      plugins: [
        ['react-remove-properties', { properties: ['data-testid'] }],
      ],
    },
  },
};
