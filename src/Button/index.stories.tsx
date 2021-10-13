/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 19:09:14
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-13 21:21:49
 * @FilePath: \borderlands3-ui\src\Button\index.stories.tsx
 */
import React from 'react';
import { Button } from '.';

export default {
  title: 'Button',
};

export const Default = () => <Button>click me</Button>;

export const Disabled = () => <Button disabled>disabled</Button>;
