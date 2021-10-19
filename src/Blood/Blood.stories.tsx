/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-18 11:34:58
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-19 21:42:27
 * @FilePath: \borderlands3-ui\src\Blood\Blood.stories.tsx
 */
import React, { useState } from 'react';
import { Blood } from '.';
import { Button } from '../Button';

export default {
  component: Blood,
  title: 'Blood',
};

export const Default = () => (
  <Blood blood={77} totalBlood={180} shilter={95} totalShilter={140} profession="Amara" />
);

export const Anshin = () => (
  <Blood blood={77} totalBlood={180} shilter={0} totalShilter={140} profession="FL4K" />
);

export const Deathless = () => (
  <Blood blood={1} totalBlood={180} shilter={140} totalShilter={140} profession="Moze" />
);

export const Dynamic = () => {
  const [blood, setBlood] = useState(20);
  const totalBlood = 180;

  return (
    <div>
      <Blood blood={blood} totalBlood={180} shilter={140} totalShilter={140} profession="Zane" />
      <div style={{
        marginTop: 30,
        width: 400,
        display: 'flex',
        justifyContent: 'space-around',
      }}
      >
        <Button
          onClick={() => setBlood((pre) => (pre + 10 > totalBlood ? totalBlood : pre + 10))}
        >
          increase
        </Button>
        <Button
          onClick={() => setBlood((pre) => (pre - 10 < 0 ? 0 : pre - 10))}
        >
          decrease
        </Button>
      </div>
    </div>
  );
};
