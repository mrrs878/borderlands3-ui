/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-09 21:03:35
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-14 21:57:39
 * @FilePath: \borderlands3-ui\src\Setting\index.test.tsx
 */

import React, { useState } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { Setting, SettingItems } from '.';

const App = () => {
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

describe('Test Component', () => {
  it('should be defined', () => {
    expect(Setting).toBeDefined();
  });

  it('Setting item should diaplay normally', async () => {
    const { findByText } = render(<App />);

    const tmp = await findByText('Controller Aim Assist');
    expect(tmp).toBeDefined();
  });

  it('After clicking the arrow, the value should be able to switch normally', async () => {
    const { findAllByRole, findAllByText } = render(<App />);

    const Arrow = await findAllByRole('button');

    const MouseADSOption = await findAllByText('Off');

    expect(Arrow.length).toBeGreaterThan(0);
    expect(MouseADSOption.length).toBeGreaterThan(0);

    try {
      const tmp = await findAllByText('On');
      expect(tmp).toBeUndefined();
      // eslint-disable-next-line no-empty
    } catch (e) {}

    await act(async () => {
      fireEvent.click(Arrow[0]);
      const MouseADSOptionNew = await findAllByText('On');
      expect(MouseADSOptionNew.length).toBe(1);
    });
  });
});
