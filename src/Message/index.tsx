/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-26 21:59:58
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-27 22:02:54
 */
import React, { FC, useEffect } from 'react';
import { SVG } from '@svgdotjs/svg.js';
import style from './index.module.less';

interface IMessageProps {}

const LeveledUp: FC<IMessageProps> = () => {
  useEffect(() => {
    const svgContainer: HTMLDivElement = document.querySelector('#progressSVG');
    if (svgContainer) {
      const width = 300;
      const height = 30;
      const canvas = SVG().addTo(svgContainer)
        .size(width, height * 6);

      const gradient = canvas.gradient('linear', (add) => {
        add.stop(0, '#ffae00', 1);
        add.stop(width, 'transparent', 1);
      });
      for (let i = 0; i < 6; i += 1) {
        canvas.path(`
        M 0 0
        L ${width / 2} ${height / 2}
        L ${width} 0
        L ${width} ${height}
        L ${width / 2} ${height / 2}
        L 0 ${height}
        Z
      `).attr({ fill: gradient }).transform({ rotate: i * 30, translateY: height });
      }
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.svgContainer} id="progressSVG" />
    </div>
  );
};

const Message = {
  LeveledUp,
};

export { Message };
