/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-11-05 20:13:09
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-11-10 21:22:38
 * @FilePath: \borderlands3-ui\src\Card\index.test.tsx
 */
// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';
import { Card, Company, Rarity } from '.';

const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

describe('Test Component', () => {
  it('should be defined', () => {
    expect(Card).toBeDefined();
  });

  it('Card.Gun should display normally', async () => {
    const Gun = () => (
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
          'Critical Hits ricochet 1 bullet at the nearest enemy1',
        ]}
        currency="123"
        company={Company.jakobs}
      />
    );

    const { getByText } = render(<Gun />);

    await sleep(20);

    const rarity = getByText(Rarity.uncommon);

    expect(rarity).toBeDefined();
  });
});
