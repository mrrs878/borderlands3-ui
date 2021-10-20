/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-18 11:31:01
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-20 11:57:35
 * @FilePath: \borderlands3-ui\src\Blood\index.tsx
 */
import React, { FC, useEffect, useRef } from 'react';
import { SVG, Svg, Gradient } from '@svgdotjs/svg.js';
import style from './index.module.less';

type Path = Array<[number, number]>;
interface IBloodProps {
  blood: number;
  totalBlood: number;
  shilter: number;
  totalShilter: number;
  profession: 'Amara' | 'Zane' | 'Moze' | 'FL4K',
}

interface IDrawPolygon {
  container: Svg;
  fullPath: Path;
  borderColor: string;
  percent: number;
  fillColor: [string, string];
}

const ShilterIcon = () => (
  <svg className={style.shilterIcon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4066" width="18" height="18">
    <path d="M511.340544 986.185728c-1.88416 0-3.731456-0.21504-5.543936-0.651264-51.41504-12.976128-234.653696-136.50944-339.146752-399.872-48.187392-121.585664-60.489728-257.55648-62.373888-350.21824-0.503808-25.546752 14.67392-49.850368 37.685248-60.526592 109.78304-50.927616 311.156736-137.080832 369.696768-137.302016 58.710016 0.169984 259.19488 86.071296 368.39424 136.849408 20.41856 9.445376 37.900288 37.599232 37.443584 60.237824-1.91488 93.298688-14.352384 229.943296-62.521344 351.008768-98.308096 247.158784-279.072768 384.239616-337.885184 399.7696-1.86368 0.487424-3.833856 0.704512-5.748736 0.704512z" p-id="4067" fill="#7bcec9" data-spm-anchor-id="a313x.7781069.0.i5" className="selected" />
  </svg>
);

const BloodIcon = () => (
  <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8974" width="24" height="24">
    <path d="M578.6 599.5c-2.7-1.7-5-4-6.9-6.9l6.9 6.9z" fill="#ef8fb3" p-id="8975" />
    <path d="M670.8 378V173.5h-268V378H189v268h213.8v197.5h268V646H859V378H670.8zM819 606H630.8v197.5h-188V606H229V418h213.8V213.5h188V418H819v188z" fill="#ef8fb3" p-id="8976" />
  </svg>
);

const FULL_PATH_SHILTER = ([[0, 0], [80, 0], [82, 5], [135, 5], [140, 15], [5, 15]]) as Path;
const FULL_PATH_BLOOD = ([[5, 0], [175, 0], [180, 10], [80, 10], [72, 15], [10, 15]]) as Path;

const drawPolygon = (config: IDrawPolygon) => {
  if (!config.container) return;

  const {
    container, fullPath, borderColor, fillColor, percent,
  } = config;

  if (!container.findOne('polygon')) container.polygon(fullPath).stroke(borderColor);

  if (percent < 0) return;

  let gradient = container.findOne('linearGradient');

  if (gradient instanceof Gradient) {
    gradient.to(percent / 100, 1);
  } else {
    gradient = container.gradient('linear', (add) => {
      add.stop(0, fillColor[0], 1);
      add.stop(40, fillColor[1], 1);
      add.stop(40, fillColor[0], 0);
      add.stop(100, fillColor[1], 0);
      add.from(0, 1);
      add.to(percent / 100, 1);
    });
    gradient.addClass(style.svgGradient);
  }
  container.attr({ fill: gradient });
};

const Blood: FC<IBloodProps> = (props) => {
  const shilterSVGRef = useRef<Svg>(null);
  const bloodSVGRef = useRef<Svg>(null);

  useEffect(() => {
    shilterSVGRef.current = SVG().addTo('#shilterWrapper').size(140, 15);
    bloodSVGRef.current = SVG().addTo('#bloodWrapper').size(180, 15);
  }, []);

  useEffect(() => {
    const bloodPercent = (props.blood / props.totalBlood) * 100;
    const bloodBorderColor = bloodPercent < 20 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(125, 125, 125, 0.2)';
    drawPolygon({
      container: bloodSVGRef.current,
      fullPath: FULL_PATH_BLOOD,
      borderColor: bloodBorderColor,
      percent: bloodPercent,
      fillColor: ['#810910', '#c40f19'],
    });
  }, [props.blood, props.totalBlood]);

  useEffect(() => {
    const shilterPercent = (props.shilter / props.totalShilter) * 100;
    const shilterBorderColor = shilterPercent < 20 ? 'rgba(255, 0, 0, 0.3)' : 'rgba(125, 125, 125, 0.2)';
    drawPolygon({
      container: shilterSVGRef.current,
      fullPath: FULL_PATH_SHILTER,
      borderColor: shilterBorderColor,
      percent: shilterPercent,
      fillColor: ['#0b808b', '#10dae9'],
    });
  }, [props.shilter, props.totalShilter]);

  return (
    <div className={style.container}>
      <div id="shilterWrapper" className={style.shilterWrapper}>
        <div className={style.shilter}>
          <ShilterIcon />
          <span>{ props.shilter }</span>
        </div>
      </div>
      <div id="bloodWrapper" className={style.bloodWrapper}>
        <div className={style.blood}>
          <BloodIcon />
          <span>{ props.blood }</span>
        </div>
        <div className={style.profession}>{ props.profession }</div>
      </div>
    </div>
  );
};

export { Blood };
