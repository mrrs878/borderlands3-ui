/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-29 22:09:08
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-11-10 20:23:33
 * @FilePath: \borderlands3-ui\src\Message\index.test.tsx
 */

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Message } from './index';
import { Button } from '../Button';

describe('Test Component', () => {
  it('should be defined', () => {
    expect(Message).toBeDefined();
  });

  it('Message.LeveledUp should be displayed and closed normally', () => {
    const LeveledUp = () => (
      <Button onClick={() => Message.LeveledUp({ level: 75 })}>Leveledup</Button>
    );

    const { getByText } = render(<LeveledUp />);
    const btn = getByText('Leveledup');

    expect(btn).toBeDefined();

    fireEvent.click(btn);

    const content = getByText('YOU LEVELED UP!');

    expect(content).toBeDefined();
  });

  it('Message. should be displayed and closed normally', () => {
    const MissionComplete = () => (
      <Button onClick={() => Message.MissionComplete({ missionName: 'Children of the Vault' })}>Mission Complete</Button>
    );

    const { getByText } = render(<MissionComplete />);
    const btn = getByText('Mission Complete');

    expect(btn).toBeDefined();

    fireEvent.click(btn);

    const content = getByText('Children of the Vault');

    expect(content).toBeDefined();
  });
});
