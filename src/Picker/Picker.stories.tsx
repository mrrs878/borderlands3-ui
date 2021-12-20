/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-20 20:18:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-20 20:59:31
 * @FilePath: \borderlands3-ui\src\Picker\Picker.stories.tsx
 */

import React, { useState } from 'react';
import { Picker } from '.';

export default {
  title: 'Picker',
  component: Picker,
};

export const SingleOption = () => {
  const [config, setConfig] = useState({
    title: 'Controller Aim Assist',
    options: ['Off'],
    activedIndex: 0,
  });

  const { title, options, activedIndex } = config;

  return (
    <Picker
      title={title}
      options={options}
      activedIndex={activedIndex}
      onChange={(index) => setConfig((pre) => ({ ...pre, activedIndex: index }))}
    />
  );
};

export const MutiOptions = () => {
  const [config, setConfig] = useState({
    title: 'Controller Aim Assist',
    options: ['Off', 'On'],
    activedIndex: 0,
  });

  const { title, options, activedIndex } = config;

  return (
    <Picker
      title={title}
      options={options}
      activedIndex={activedIndex}
      onChange={(index) => setConfig((pre) => ({ ...pre, activedIndex: index }))}
    />
  );
};
