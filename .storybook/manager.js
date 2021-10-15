/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-14 10:11:44
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-15 18:00:20
 * @FilePath: \borderlands3-ui\.storybook\manager.js
 */
import React from 'react';
import { addons } from '@storybook/addons';
import { theme } from './theme';
import '../src/assets/fonts/Countach-Italic.otf';

addons.setConfig({
  theme,
  sidebar: {
    renderLabel: (item) => <span style={{ fontFamily: 'Countach Italic' }}>{item.name}</span>,
  },
  isToolshown: false,
});