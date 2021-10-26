/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-15 10:24:15
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-26 21:10:40
 * @FilePath: \borderlands3-ui\src\Button\index.test.tsx
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, InteractiveButton } from '.';

const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

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

  it('Plain buttons should have normal styles', () => {
    const App = () => (
      <Button type="plain">click me</Button>
    );

    const { getByText } = render(<App />);
    const button = getByText('click me');

    expect(button).toBeDefined();

    let isExists = false;
    button.classList.forEach((className) => { isExists = !!className.match(/plainContent/); });
    expect(isExists).toEqual(true);
  });

  it('onClick should not be called when giving up the long press', async () => {
    const clickHandler = jest.fn();

    const App = () => (
      <InteractiveButton onClick={clickHandler}>click me</InteractiveButton>
    );

    const { getByText } = render(<App />);
    const button = getByText('click me');

    expect(button).toBeDefined();

    fireEvent.mouseDown(button);

    await sleep(1);

    fireEvent.mouseUp(button);

    expect(clickHandler).toBeCalledTimes(0);
  });

  it('when pressed long enough onClick should be called', async () => {
    const clickHandler = jest.fn();

    const App = () => (
      <InteractiveButton onClick={clickHandler}>click me</InteractiveButton>
    );

    const { getByText } = render(<App />);
    const button = getByText('click me');

    expect(button).toBeDefined();

    fireEvent.mouseDown(button);

    await sleep(3000);

    fireEvent.mouseUp(button);

    expect(clickHandler).toBeCalledTimes(1);
  });
});
