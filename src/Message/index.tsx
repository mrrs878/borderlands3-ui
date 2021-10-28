/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-26 21:59:58
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-28 21:24:57
 */
import React, { FC, useEffect } from 'react';
import { SVG } from '@svgdotjs/svg.js';
import style from './index.module.less';

interface ILeveledUpProps {
  level: number
}

const LeveledUp: FC<ILeveledUpProps> = (props) => {
  useEffect(() => {
    const svgContainer: HTMLDivElement = document.querySelector('#progressSVG');
    if (svgContainer) {
      const width = 300;
      const height = 50;
      const canvas = SVG().addTo(svgContainer)
        .size(width, width);

      const gradient = canvas.gradient('linear', (add) => {
        add.stop(0, 'rgba(0, 0, 0, 0)', 1);
        add.stop(0.5, '#f9d730', 1);
        add.stop(1, 'rgba(0, 0, 0, 0)', 1);
        add.from(0, 0);
        add.to(1, 0);
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
        `).attr({ fill: gradient, filter: 'blur(1px)' })
          .transform({ rotate: i * 30, translateY: width / 2 })
          .stroke('rgba(0, 0, 0, 0)');
      }

      canvas.text(`LEVEL ${props.level}`)
        .addClass(style.levelText)
        .center(width / 2, width / 2)
        .attr({ fill: '#f9d730', filter: 'drop-shadow(0 0 6px #824111)' });

      canvas.text('YOU LEVELED UP!')
        .addClass(style.leveledUpText)
        .center(width / 2, width / 2 + 60)
        .attr({ fill: '#f9d730', filter: 'drop-shadow(0 0 6px #824111)' });
    }
  }, [props.level]);

  return (
    <div className={style.container}>
      <div className={style.svgContainer} id="progressSVG" />
    </div>
  );
};

interface IMissionCompleteProps {
  missionName: string
}

const MissionComplete: FC<IMissionCompleteProps> = (props) => {
  useEffect(() => {
    const svgContainer: HTMLDivElement = document.querySelector('#progressSVG');
    if (svgContainer) {
      const width = 600;
      const height = 300;
      const canvas = SVG().size(width, height).addTo(svgContainer);

      const t = canvas.text('MISSION COMPLETE')
        .addClass(style.levelText)
        .center(width / 2, height / 2)
        .attr({ fill: '#f9d730', filter: 'drop-shadow(0 0 6px #824111)' });

      console.log(t.width());

      canvas.text(props.missionName)
        .addClass(style.leveledUpText)
        .attr({ fill: '#fff', filter: 'drop-shadow(0 0 6px #000)' })
        .center(width / 2, height / 2 + 60);
    }
  }, [props.missionName]);

  return (
    <div className={style.container}>
      <div className={style.svgContainer} id="progressSVG" />
    </div>
  );
};

const Message = {
  LeveledUp,
  MissionComplete,
};

export { Message };
