/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-14 10:11:14
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-15 19:42:12
 * @FilePath: \borderlands3-ui\.storybook\theme.js
 */
import { create } from '@storybook/theming';
import './index.css';

const theme = create({
  base: 'dark',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://borderlands.com/',
  brandImage: 'https://mrrsblog.oss-cn-shanghai.aliyuncs.com/logo-removebg-preview.png',
  appContentBg: 'rgba(0, 0, 0, 0)'
});

export { theme };
