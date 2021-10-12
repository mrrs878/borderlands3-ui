/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 19:06:44
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-12 19:51:24
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
        "css-loader",
        "less-loader"
      ],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};