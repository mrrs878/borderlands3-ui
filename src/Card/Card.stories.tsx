/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-11-01 21:00:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-11-05 19:46:24
 * @FilePath: \borderlands3-ui\src\Card\Card.stories.tsx
 */
import React from 'react';
import { Card, Company, Rarity } from './index';

export default {
  title: 'Card',
  component: Card,
};

export const Gun = () => (
  <Card.Gun
    score={101}
    levelReq={4}
    title="xxx"
    damage={24}
    accuracy={50}
    handling={56}
    reloadTime={1.5}
    fireRate={11.5}
    magazineSize={5}
    rarity={Rarity.uncommon}
    additions={[
      { desc: 'Weapon Damage', value: '27%' },
      { desc: 'Melee Damage', value: '40%' },
      { desc: 'Weapon Zoom', value: '2.2x' },
    ]}
    superAddions={[
      'Critical Hits ricochet 1 bullet at the nearest enemy',
      'Critical Hits ricochet 1 bullet at the nearest enemy',
    ]}
    currency="123"
    company={Company.jakobs}
  />
);
