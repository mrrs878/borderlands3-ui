/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-18 11:34:58
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-18 20:25:53
 * @FilePath: \borderlands3-ui\src\Blood\Blood.stories.tsx
 */
import React from 'react';
import { Blood } from '.';

export default {
  component: Blood,
  title: 'Blood',
};

export const Default = () => (
  <Blood blood={77} shilter={95} />
);

export const Anshin = () => (
  <Blood blood={77} shilter={0} />
);
