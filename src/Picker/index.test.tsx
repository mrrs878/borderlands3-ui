/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-20 20:18:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-20 20:58:40
 * @FilePath: \borderlands3-ui\src\Picker\index.test.tsx
 */
// Generated with util/create-component.js
import React, { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Picker } from '.';

describe('Test Component', () => {
  it('should be defined', () => {
    expect(Picker).toBeDefined();
  });

  it('After clicking the left or right arrow, the displayed value should change', async () => {
    const config = {
      title: 'Controller Aim Assist',
      options: ['Off', 'On'],
      activedIndex: 0,
    };

    const ControllerAimAssist = () => {
      const [, setConfig] = useState(config);
      const { title, options, activedIndex } = config;

      return (
        <Picker
          title={title}
          options={options}
          activedIndex={activedIndex}
          onChange={(index) => {
            config.activedIndex = index;
            setConfig((pre) => ({ ...pre, activedIndex: index }));
          }}
        />
      );
    };

    const { findAllByRole } = render(<ControllerAimAssist />);

    const arrows = await findAllByRole('button');

    expect(arrows).toHaveLength(2);

    const [leftArrow, rightArrow] = arrows;

    act(() => {
      fireEvent.click(leftArrow);
    });

    expect(config.activedIndex).toEqual(1);

    act(() => {
      fireEvent.click(rightArrow);
    });

    expect(config.activedIndex).toEqual(0);

    act(() => {
      fireEvent.click(rightArrow);
    });

    expect(config.activedIndex).toEqual(1);
  });
});
