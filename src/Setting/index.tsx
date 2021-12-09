/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-09 21:03:35
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-09 21:56:48
 * @FilePath: \borderlands3-ui\src\Setting\index.tsx
 */
// Generated with util/create-component.js
import React, {
  CSSProperties, FC, useEffect, useRef,
} from 'react';
import { Svg, SVG } from '@svgdotjs/svg.js';
import style from './index.module.less';

interface ISettingProps {
  containerClass?: string;
  style?: CSSProperties;
}

const Setting: FC<ISettingProps> = (props) => {
  const backgroundSVGRef = useRef<Svg>(null);

  useEffect(() => {
    const container = document.querySelector('#backgroundSVGRef');
    if (container) {
      backgroundSVGRef.current = SVG().addTo('#backgroundSVGRef').addClass(style.backgroundSvg);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (backgroundSVGRef.current) {
        const svgContainer = document.querySelector('#backgroundSVGRef');
        const { clientWidth, clientHeight } = svgContainer;
        const offset1 = 8;
        const titleWidth = 150;
        const offset2 = 5;
        backgroundSVGRef.current.polygon([
          [offset1, 0],
          [(clientWidth - titleWidth) / 2 - offset2 - 2, 0],
          [(clientWidth - titleWidth) / 2, offset2],
          [(clientWidth + titleWidth) / 2, offset2],
          [(clientWidth + titleWidth) / 2 + offset2 + 2, 0],
          [clientWidth - offset1, 0],
          [clientWidth, offset1],
          [clientWidth, clientHeight - offset1],
          [clientWidth - offset1, clientHeight],
          [offset1, clientHeight],
          [0, clientHeight - offset1],
          [0, offset1],
          [offset1, 0],
        ]).fill('#0c5788').stroke('#000');

        backgroundSVGRef.current.polygon([
          [offset1, 0],
          [(clientWidth - titleWidth) / 2 - offset2 - 2, 0],
          [(clientWidth - titleWidth) / 2, offset2],
          [(clientWidth + titleWidth) / 2, offset2],
          [(clientWidth + titleWidth) / 2 + offset2 + 2, 0],
          [clientWidth - offset1, 0],
          [clientWidth, offset1],
          [clientWidth, clientHeight - offset1],
          [clientWidth - offset1, clientHeight],
          [offset1, clientHeight],
          [0, clientHeight - offset1],
          [0, offset1],
          [offset1, 0],
        ]).fill('#004d89').stroke('#000').scale(0.98, 0.98);

        backgroundSVGRef.current.text('ACCESSIBILITY')
          .attr({
            style: 'font-size: 20px',
          })
          .center(clientWidth / 2, offset2 / 2)
          .fill('#fff');

        backgroundSVGRef.current.rect(clientWidth - 8, offset1 * 2)
          .x(4)
          .y(offset1 * 2)
          .fill('#131418');

        backgroundSVGRef.current.rect(clientWidth - 8, clientHeight - offset1 * 8)
          .x(4)
          .y(offset1 * 4)
          .fill('#041724');

        backgroundSVGRef.current.polygon([
          [clientWidth - 4 * 2, offset1],
          [clientWidth - 4 * 2, offset1 * 4 - 2],
          [clientWidth - 4 * 2 - offset1, offset1 * 5 - 2],
          [offset1, offset1 * 5 - 2],
          [0, offset1 * 4],
          [0, offset1],
        ])
          .x(4)
          .y(clientHeight - offset1 * 4)
          .fill('#131418');
      }
    });
  }, []);

  return (
    <div className={`${style.container} ${props.containerClass}`} style={props.style}>
      <div className={style.background} id="backgroundSVGRef" />
      { props.children }
    </div>
  );
};

Setting.defaultProps = {
  containerClass: '',
  style: {},
};

export { Setting };
