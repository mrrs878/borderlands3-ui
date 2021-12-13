/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-09 21:03:35
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-10 19:44:16
 * @FilePath: \borderlands3-ui\src\Setting\Setting.stories.tsx
 */

import React, { useState } from 'react';
import { SettingItems, Setting } from '.';

export default {
  title: 'Setting',
  component: Setting,
};

export const Accessibility = () => {
  const [config, setConfig] = useState<SettingItems>({
    Aiming: [
      {
        title: 'Mouse ADS Snap to Target',
        key: '0',
        options: ['Off', 'On'],
        activedIndex: 0,
      },
      {
        title: 'Controller Aim Assist',
        key: '1',
        options: ['Off', 'On'],
        activedIndex: 0,
      },
      {
        title: 'Controller ADS Snap to Target',
        key: '6',
        options: ['Off', 'On'],
        activedIndex: 0,
      },
      {
        title: 'Weapon ADS',
        key: '2',
        options: ['Off', 'On'],
        activedIndex: 0,
      },
    ],
    Movement: [
      {
        title: 'Sprint',
        key: '3',
        options: ['Toggle'],
        activedIndex: 0,
      },
      {
        title: 'Crouch',
        key: '4',
        options: ['Toggle'],
        activedIndex: 0,
      },
      {
        title: 'Mantle with Forward',
        key: '5',
        options: ['Off', 'On'],
        activedIndex: 0,
      },
    ],
  });
  return (
    <Setting items={config} onChange={(newConfig) => setConfig(newConfig)} />
  );
};
