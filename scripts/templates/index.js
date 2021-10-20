/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 12:00:49
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-20 14:16:21
 * @FilePath: \borderlands3-ui\scripts\templates\index.js
 */
const component = require('./component');
const componentStories = require('./component.stories');
const componentTests = require('./component.test');
const componentStyles = require('./component.less');

module.exports = [
  component,
  componentStories,
  componentTests,
  componentStyles,
];
