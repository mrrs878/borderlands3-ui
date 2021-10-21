/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 12:00:49
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-20 21:09:29
 * @FilePath: \borderlands3-ui\scripts\templates\component.js
 */
module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React, { FC } from 'react';
import style from './index.module.less';

interface I${componentName}Props {}

const ${componentName}: FC<I${componentName}Props> = () => (
  <div className={style.container}>hello</div>
);

export { ${componentName} };
`,
  extension: '.tsx',
});
