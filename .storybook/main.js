/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 19:06:44
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-13 20:50:18
 * @FilePath: \borderlands3-ui\.storybook\main.js
 */
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        "style-loader", 
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash:base64:6]',
            },
          },
        },
        "less-loader"
      ],
      include: path.resolve(__dirname, "../")
    });
    
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};