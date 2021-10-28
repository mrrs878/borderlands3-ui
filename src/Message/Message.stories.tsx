/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-26 21:59:58
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-28 21:14:35
 * @FilePath: \borderlands3-ui\src\Message\Message.stories.tsx
 */
// Generated with util/create-component.js
import React from 'react';
import { Message } from '.';

export default {
  title: 'Message',
  component: Message,
};

export const LeveledUp = () => <Message.LeveledUp level={75} />;

export const MissionComplete = () => <Message.MissionComplete missionName="Children of the Vault" />;
