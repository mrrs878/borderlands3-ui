/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 12:00:49
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-20 14:29:29
 * @FilePath: \borderlands3-ui\scripts\templates\component.test.js
 */
module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from 'react';
import { ${componentName} } from '.';

describe('Test Component', () => {
  it('should be defined', () => {
    expect(${componentName}).toBeDefined();
  });
});
`,
  extension: '.test.tsx',
});
