/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 12:00:49
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-20 14:29:16
 * @FilePath: \borderlands3-ui\scripts\templates\component.stories.js
 */
module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from 'react';
import { ${componentName} } from '.';

export default {
  title: '${componentName}',
};
`,
  extension: '.stories.tsx',
});
