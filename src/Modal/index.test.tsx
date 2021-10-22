/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 21:10:00
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-22 14:45:53
 * @FilePath: \borderlands3-ui\src\Modal\index.test.tsx
 */
// Generated with util/create-component.js
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Polygon } from '@svgdotjs/svg.js';
import { Modal } from '.';

describe('Test Component', () => {
  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  it('When maskCloseable is set, click mask, Modal should be closed', () => {
    const App = () => {
      const [visible, setVisible] = useState(true);
      return (
        <Modal mask={{ closeable: true, onClick: () => setVisible(false) }} visible={visible} />
      );
    };

    // just for test
    Polygon.prototype.scale = jest.fn();

    const { getByTestId } = render(<App />);
    const mask = getByTestId('mask');

    expect(mask).toBeDefined();
  });
});
