/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 19:09:14
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-29 21:42:37
 * @FilePath: \borderlands3-ui\src\Button\Button.stories.tsx
 */

import React from 'react';
import { Button, InteractiveButton } from '.';
import { Message } from '../Message';

export default {
  title: 'Button',
};

export const Default = () => <Button>click me</Button>;

export const Disabled = () => <Button disabled>disabled</Button>;

export const Plain = () => <Button type="plain">Exit</Button>;

export const Interactive = () => (
  <InteractiveButton
    // eslint-disable-next-line no-alert
    onClick={() => Message.LeveledUp({ level: 6 })}
  >
    Confirm
  </InteractiveButton>
);
