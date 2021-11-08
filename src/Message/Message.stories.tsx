/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-26 21:59:58
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-11-08 21:56:44
 * @FilePath: \borderlands3-ui\src\Message\Message.stories.tsx
 */

import React from 'react';
import { Button } from '../Button';
import { Message } from '.';

export default {
  title: 'Message',
  component: Message,
};

export const LeveledUp = () => (
  <Button onClick={() => Message.LeveledUp({ level: 75 })}>Leveledup</Button>
);

export const MissionComplete = () => (
  <Button onClick={() => Message.MissionComplete({ missionName: 'Children of the Vault' })}>Mission Complete</Button>
);
