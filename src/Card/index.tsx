/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-11-01 21:00:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-11-01 22:04:57
 */
import React, { useEffect, useRef } from 'react';
import { Svg, SVG } from '@svgdotjs/svg.js';
import style from './index.module.less';

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
      const clientWidth = 300;
      const clientHeight = 200;
      const offset1 = 15;
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
        width: 2,
      });

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
    </div>
  );
};

const Card = {
  Gun,
};

export { Card };
