/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-14 10:11:14
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-14 10:21:17
 * @FilePath: \borderlands3-ui\.storybook\theme.js
 */
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
});

export { theme };
