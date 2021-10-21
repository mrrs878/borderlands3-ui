/*
* @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 21:10:00
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-21 21:19:08
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
  maskCloseable?: boolean;
  onClose: DOMAttributes<HTMLDivElement>['onClick'];
  onKeyDown?: DOMAttributes<HTMLDivElement>['onKeyDown'];
}

const Modal: FC<IModalProps> = (props) => {
  const backgroundSVGRef = useRef<Svg>(null);

  useEffect(() => {
    const container = document.querySelector('#backgroundSVGRef');
    if (props.visible && container) {
      backgroundSVGRef.current = SVG().addTo('#backgroundSVGRef').addClass(style.backgroundSvg);
    }
  }, [props.visible]);

  useEffect(() => {
    if (props.visible && backgroundSVGRef.current) {
      const svgContainer = document.querySelector('#backgroundSVGRef');
      const { clientWidth, clientHeight } = svgContainer;
      const offset1 = 15;
      backgroundSVGRef.current.polygon([
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

      backgroundSVGRef.current.polygon([
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
        onClick={props.maskCloseable ? props.onClose : () => {}}
      />
      <div className={`${style.container} ${props.containerClass}`} style={props.style}>
        <div className={style.background} id="backgroundSVGRef" />
        { props.children }
      </div>
    </div>
    )
  );
};

Modal.defaultProps = {
  containerClass: '',
  style: {},
  maskCloseable: false,
  onKeyDown: () => {},
};

export { Modal };
