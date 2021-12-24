/*
* @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 21:10:00
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-24 19:52:01
 * @FilePath: \borderlands3-ui\src\Modal\index.tsx
*/
/* eslint-disable jsx-a11y/control-has-associated-label */
// Generated with util/create-component.js
import React, {
  DOMAttributes, FC, useEffect, useRef,
} from 'react';
import { Svg, SVG } from '@svgdotjs/svg.js';
import style from './index.module.less';

interface IModalProps {
  visible: boolean;
  containerClass?: string;
  style?: React.CSSProperties;
  mask?: Mask;
  onKeyDown?: DOMAttributes<HTMLDivElement>['onKeyDown'];
}

interface Mask {
  closeable: boolean;
  onClick: DOMAttributes<HTMLDivElement>['onClick'];
}

const Modal: FC<IModalProps> = (props) => {
  const modalBackgroundSVGRef = useRef<Svg>(null);

  useEffect(() => {
    const container = document.querySelector('#modalBackgroundSVGRef');
    if (props.visible && container) {
      modalBackgroundSVGRef.current = SVG().addTo('#modalBackgroundSVGRef').addClass(style.backgroundSvg);
    }
  }, [props.visible]);

  useEffect(() => {
    if (props.visible && modalBackgroundSVGRef.current) {
      const svgContainer = document.querySelector('#modalBackgroundSVGRef');
      const { clientWidth, clientHeight } = svgContainer;
      const offset1 = 15;
      modalBackgroundSVGRef.current.polygon([
        [offset1, 0],
        [clientWidth - offset1, 0],
        [clientWidth, offset1],
        [clientWidth, clientHeight - offset1],
        [clientWidth - offset1, clientHeight],
        [offset1, clientHeight],
        [0, clientHeight - offset1],
        [0, offset1],
        [offset1, 0],
      ]).fill('#1583d8').stroke('#000');

      modalBackgroundSVGRef.current.polygon([
        [offset1, 0],
        [clientWidth - offset1, 0],
        [clientWidth, offset1],
        [clientWidth, clientHeight - offset1],
        [clientWidth - offset1, clientHeight],
        [offset1, clientHeight],
        [0, clientHeight - offset1],
        [0, offset1],
        [offset1, 0],
      ]).fill('#004d89').stroke('#000').scale(0.98, 0.98);
    }
  }, [props.visible]);

  return (
    props.visible && (
    <div>
      <div
        tabIndex={0}
        data-testid="mask"
        role="button"
        className={style.mask}
        onKeyDown={props.onKeyDown}
        onClick={props.mask.closeable ? props.mask.onClick : () => {}}
      />
      <div className={`${style.container} ${props.containerClass}`} style={props.style}>
        <div className={style.background} id="modalBackgroundSVGRef" />
        { props.children }
      </div>
    </div>
    )
  );
};

Modal.defaultProps = {
  containerClass: '',
  style: {},
  mask: {
    closeable: false,
    onClick: () => {},
  },
  onKeyDown: () => {},
};

export { Modal };
