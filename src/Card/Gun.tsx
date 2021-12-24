/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-11-05 19:22:01
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-24 19:51:44
 * @FilePath: \borderlands3-ui\src\Card\Gun.tsx
 */

import React, { useEffect, useRef } from 'react';
import { Svg, SVG } from '@svgdotjs/svg.js';
import style from './index.module.less';
import { Company, Rarity } from './enum';

export interface IGunIndicatorProps {
  title: string;
  value: string;
}

export interface ICardGunProps {
  score: number;
  levelReq: number;
  title: string;
  damage: number;
  accuracy: number;
  handling: number;
  reloadTime: number;
  fireRate: number;
  magazineSize: number;
  rarity: Rarity;
  additions: Array<{
    value: string;
    desc: string;
  }>;
  superAddions: Array<string>;
  currency: string;
  company: Company;
}

const company2style = {
  [Company.jakobs]: style.jakobs,
};

const GunIndicator = (props: IGunIndicatorProps) => (
  <div className={style.gunIndicatorContainer}>
    {
      props.value && <span className={style.gunIndicatorContainerValue}>{ props.value }</span>
    }
    <span className={style.gunIndicatorContainerTitle}>{ props.title }</span>
  </div>
);

const Gun = (props: ICardGunProps) => {
  const gunContainer = useRef<HTMLDivElement>(null);
  const superAddionContainer = useRef<HTMLDivElement>(null);
  const gunBackgroundSVGRef = useRef<Svg>(null);

  useEffect(() => {
    const container = document.querySelector('#gunBackgroundSVGRef');
    if (container) {
      gunBackgroundSVGRef.current = SVG().addTo('#gunBackgroundSVGRef').addClass(style.backgroundSvg);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (gunBackgroundSVGRef.current) {
        const { clientWidth, clientHeight } = gunContainer.current;
        const offset1 = 20;
        const storkWidth = 4;

        gunBackgroundSVGRef.current.polygon([
          [offset1 / 2, 0],
          [clientWidth - offset1, 0],
          [clientWidth, offset1],
          [clientWidth, clientHeight - offset1],
          [clientWidth - offset1, clientHeight],
          [clientWidth / 2 + (offset1 + offset1 * 3), clientHeight],
          [clientWidth / 2 + offset1 * 3, clientHeight - offset1],
          [clientWidth / 2 - offset1 * 3, clientHeight - offset1],
          [clientWidth / 2 - (offset1 + offset1 * 3), clientHeight],
          [offset1, clientHeight],
          [0, clientHeight - offset1],
          [0, offset1 / 2],
          [offset1 / 2, 0],
        ]).fill('#21252d').stroke({
          color: '#117b22',
          width: storkWidth,
        });

        const clientHeight2 = superAddionContainer.current.clientHeight;
        gunBackgroundSVGRef.current.polygon([
          [clientWidth - storkWidth, clientHeight - offset1 * 2.5 - clientHeight2],
          [clientWidth - storkWidth, clientHeight - offset1 - storkWidth],
          [clientWidth - offset1, clientHeight - storkWidth],
          [clientWidth / 2 + (offset1 + offset1 * 3), clientHeight - storkWidth],
          [clientWidth / 2 + offset1 * 3, clientHeight - offset1 - storkWidth],
          [clientWidth / 2 - offset1 * 3, clientHeight - offset1 - storkWidth],
          [clientWidth / 2 - (offset1 + offset1 * 3), clientHeight - storkWidth],
          [offset1, clientHeight - storkWidth],
          [storkWidth, clientHeight - offset1 - storkWidth],
          [storkWidth, clientHeight - offset1 * 2.5 - clientHeight2],
        ]).fill('#1c1e22');

        gunBackgroundSVGRef.current.polygon([
          [offset1 / 2, 0],
          [clientWidth - offset1 * 2 - 10, 0],
          [clientWidth - offset1 * 2 - 10, offset1],
          [offset1 + 25, offset1],
          [offset1 + 20, offset1 + 5],
          [0, offset1 + 5],
          [0, offset1 / 2],
          [offset1 / 2, 0],
        ]).fill('#06b434');

        gunBackgroundSVGRef.current.polygon([
          [offset1 / 2, 0],
          [clientWidth - offset1 * 2 - 10, 0],
          [clientWidth - offset1 * 2 - 10, offset1],
          [offset1 + 25, offset1],
          [offset1 + 20, offset1 + 5],
          [0, offset1 + 5],
          [0, offset1],
          [offset1, 0],
        ]).fill('#117b22').addClass(style.backgroundTopRight);
      }
    }, 10);
  }, []);

  return (
    <div className={style.container} ref={gunContainer}>
      <div className={style.background} id="gunBackgroundSVGRef" />
      <div className={style.header}>
        <div className={style.score}>{ props.score }</div>
        <span>ITEM SCORE</span>
        <div className={style.blank} />
        <span>LVL REQ.</span>
        <div className={style.level}>{ props.levelReq }</div>
      </div>
      <div className={style.title}>{ props.title }</div>
      <div className={style.content}>
        <div className={style.left}>
          <GunIndicator title="DOMAGE" value={`${props.damage}`} />
          <GunIndicator title="ACCURACY" value={`${props.accuracy}%`} />
          <GunIndicator title="HANDLING" value={`${props.handling}%`} />
          <GunIndicator title="RELOAD TIME" value={`${props.reloadTime}s`} />
          <GunIndicator title="FIRE RATE" value={`${props.fireRate}s`} />
          <GunIndicator title="MAGAZINE SIZE" value={`${props.magazineSize}`} />
        </div>
        <div className={style.right}>
          <div className={style.rarity}>
            {props.rarity}
          </div>
          <div className={`${style.blank} ${style.gun}`} />
          <div className={style.rarityBottom} />
        </div>
      </div>
      <div className={style.addition}>
        {
          props.additions.map((item) => (
            <div key={item.desc} className={style.additionItem}>
              <span className={style.additionNumber}>{ item.value }</span>
              <span className={style.additionDesc}>{ item.desc }</span>
            </div>
          ))
        }
      </div>
      <div className={`${style.superAddition} ${style.addition}`} ref={superAddionContainer}>
        {
          props.superAddions.map((item) => (
            <div key={item} className={style.additionItem}>
              <span className={style.additionDesc}>{ item }</span>
            </div>
          ))
        }
      </div>
      <div className={style.amount}>
        <div className={style.currency}>$</div>
        {
          props.currency.split('').map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={style.amountItem}>{ item }</div>
          ))
        }
      </div>
      <div className={`${style.company} ${company2style[props.company]}`} />
    </div>
  );
};

export { Gun };
