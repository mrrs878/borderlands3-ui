/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-15 10:24:15
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-15 11:09:12
 * @FilePath: \borderlands3-ui\src\Button\index.test.tsx
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('Button should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('onClick should be called normally', () => {
    const clickHandler = jest.fn();

    const App = () => (
      <Button onClick={clickHandler}>click me</Button>
    );

    const { getByText } = render(<App />);
    const button = getByText('click me');

    expect(button).toBeDefined();

    fireEvent.click(button);

    expect(clickHandler).toBeCalledTimes(1);
  });

  it('onClick should not be called in the disabled state', () => {
    const clickHandler = jest.fn();

    const App = () => (
      <Button disabled onClick={clickHandler}>click me</Button>
    );

    const { getByText } = render(<App />);
    const button = getByText('click me');

    expect(button).toBeDefined();

    fireEvent.click(button);

    expect(clickHandler).toBeCalledTimes(0);
  });
});
