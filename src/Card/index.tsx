/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-11-01 21:00:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-11-03 21:49:36
 */
import React, { useEffect, useRef } from 'react';
import { Svg, SVG } from '@svgdotjs/svg.js';
import style from './index.module.less';

interface IGunIndicatorProps {
  title: string;
  value: string;
}

const GunIndicator = (props: IGunIndicatorProps) => (
  <div className={style.gunIndicatorContainer}>
    {
      props.value && <span className={style.gunIndicatorContainerValue}>{ props.value }</span>
    }
    <span className={style.gunIndicatorContainerTitle}>{ props.title }</span>
  </div>
);

const Gun = () => {
  const backgroundSVGRef = useRef<Svg>(null);

  useEffect(() => {
    const container = document.querySelector('#backgroundSVGRef');
    if (container) {
      backgroundSVGRef.current = SVG().addTo('#backgroundSVGRef').addClass(style.backgroundSvg);
    }
  }, []);

  useEffect(() => {
    if (backgroundSVGRef.current) {
      const clientWidth = 400;
      const clientHeight = 320;
      const offset1 = 20;
      const storkWidth = 4;
      backgroundSVGRef.current.polygon([
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

      backgroundSVGRef.current.polygon([
        [clientWidth - storkWidth, clientHeight - offset1 * 3.2],
        [clientWidth - storkWidth, clientHeight - offset1 - storkWidth],
        [clientWidth - offset1, clientHeight - storkWidth],
        [clientWidth / 2 + (offset1 + offset1 * 3), clientHeight - storkWidth],
        [clientWidth / 2 + offset1 * 3, clientHeight - offset1 - storkWidth],
        [clientWidth / 2 - offset1 * 3, clientHeight - offset1 - storkWidth],
        [clientWidth / 2 - (offset1 + offset1 * 3), clientHeight - storkWidth],
        [offset1, clientHeight - storkWidth],
        [storkWidth, clientHeight - offset1 - storkWidth],
        [storkWidth, clientHeight - offset1 * 3.2],
      ]).fill('#1c1e22');

      backgroundSVGRef.current.polygon([
        [offset1 / 2, 0],
        [clientWidth - offset1 * 2 - 10, 0],
        [clientWidth - offset1 * 2 - 10, offset1],
        [offset1 + 25, offset1],
        [offset1 + 20, offset1 + 5],
        [0, offset1 + 5],
        [0, offset1 / 2],
        [offset1 / 2, 0],
      ]).fill('#06b434');

      backgroundSVGRef.current.polygon([
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
  }, []);

  return (
    <div className={style.container}>
      <div className={style.background} id="backgroundSVGRef" />
      <div className={style.header}>
        <div className={style.score}>101</div>
        <span>ITEM SCORE</span>
        <div className={style.blank} />
        <span>LVL REQ.</span>
        <div className={style.level}>4</div>
      </div>
      <div className={style.title}>xxx</div>
      <div className={style.content}>
        <div className={style.left}>
          <GunIndicator title="DOMAGE" value="24" />
          <GunIndicator title="ACCURACY" value="50%" />
          <GunIndicator title="HANDLING" value="56%" />
          <GunIndicator title="RELOAD TILE" value="1.5s" />
          <GunIndicator title="FIRE RATE" value="11.5s" />
          <GunIndicator title="MAGAZINE SIZE" value="5" />
        </div>
        <div className={style.right}>
          <div className={style.rarity}>
            UNCOMMON
          </div>
          <div className={`${style.blank} ${style.gun}`} />
          <div className={style.rarityBottom} />
        </div>
      </div>
      <div className={style.addition}>
        <div className={style.additionItem}>
          <span className={style.additionNumber}>+27%</span>
          <span className={style.additionDesc}>Weapon Damage</span>
        </div>
        <div className={style.additionItem}>
          <span className={style.additionNumber}>+40%</span>
          <span className={style.additionDesc}>Melee Damage</span>
        </div>
        <div className={style.additionItem}>
          <span className={style.additionNumber}>2.2x</span>
          <span className={style.additionDesc}>Weapon Zoom</span>
        </div>
        <div className={style.additionItem}>
          <span className={style.additionDesc}>
            Critical Hits ricochet 1 bullet at the nearest enemy
          </span>
        </div>
      </div>
      <div className={style.company} />
    </div>
  );
};

const Card = {
  Gun,
};

export { Card };
