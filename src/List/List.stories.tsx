/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-21 18:51:26
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-21 21:55:19
 * @FilePath: \borderlands3-ui\src\List\List.stories.tsx
 */
import React from 'react';
import { List, ListItems } from '.';

export default {
  title: 'List',
  component: List,
};

export const Setting = () => {
  const config: ListItems = {
    Aiming: [
      {
        title: 'Mouse ADS Snap to Target',
        content: 'Off',
      },
      {
        title: 'Controller Aim Assist',
        content: 'On',
      },
      {
        title: 'Controller ADS Snap to Target',
        content: 'On',
      },
      {
        title: 'Weapon ADS',
        content: 'Off',
      },
    ],
    Movement: [
      {
        title: 'Sprint',
        content: 'Off',
      },
      {
        title: 'Crouch',
        content: 'Toggle',
      },
      {
        title: 'Mantle with Forward',
        content: 'Off',
      },
    ],
  };
  return (
    <List items={config} />
  );
};
