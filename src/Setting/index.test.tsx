/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-09 21:03:35
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-16 22:01:22
 * @FilePath: \borderlands3-ui\src\Setting\index.test.tsx
 */

import React, { useState } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { clone } from 'lodash';
import { Setting, SettingItems } from '.';

const CONFIG: SettingItems = {
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
  ],
};

describe('Test Component', () => {
  it('should be defined', () => {
    expect(Setting).toBeDefined();
  });

  it('Setting item should diaplay normally', async () => {
    const App = () => {
      const [config, setConfig] = useState<SettingItems>(CONFIG);
      return (
        <Setting items={config} onChange={(newConfig) => setConfig(newConfig)} />
      );
    };
    const { findByText } = render(<App />);

    const tmp = await findByText('Controller Aim Assist');
    expect(tmp).toBeDefined();
  });

  it('After clicking the arrow, the value should be able to switch normally', async () => {
    let config = clone(CONFIG);
    const App = () => (
      <Setting items={config} onChange={(newConfig) => { config = newConfig; }} />
    );
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

    const [LeftArrow, RightArrow] = Arrow;

    act(() => {
      fireEvent.click(LeftArrow);
    });

    expect(config.Aiming[0].activedIndex).toBe(1);

    act(() => {
      fireEvent.click(LeftArrow);
    });

    expect(config.Aiming[0].activedIndex).toBe(0);

    act(() => {
      fireEvent.click(RightArrow);
    });

    expect(config.Aiming[0].activedIndex).toBe(1);
  });
});
