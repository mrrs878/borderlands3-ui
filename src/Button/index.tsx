/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 10:10:40
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-26 21:04:29
 * @FilePath: \borderlands3-ui\src\Button\index.tsx
 */
import React, {
  DOMAttributes, FC, useCallback, useEffect, useRef,
} from 'react';
import { SVG, Svg, Path } from '@svgdotjs/svg.js';
import { className, roundedRectData } from '../utils';
import style from './index.module.less';

type ButtonType = 'default' | 'plain';

const GAP = 2;
const DEFAULT_OFFSET = GAP * 4;

interface IButtonProps {
  type?: ButtonType;
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
  onKeyDown?: DOMAttributes<HTMLDivElement>['onKeyDown'];
  disabled?: boolean;
  containerClass?: string;
}

type IInteractiveButtonProps = Omit<IButtonProps, 'type' | 'onKeyDown'>;

const InteractiveButton: FC<IInteractiveButtonProps> = (props) => {
  const btnContainerRef = useRef<HTMLDivElement>(null);
  const meterPathRef = useRef<Path>(null);
  const dashArraySize = useRef(0);
  const isRunning = useRef(false);
  const progressSVGRef = useRef<Svg>(null);
  const curPathDashOffset = useRef(-1);

  const step = useCallback(() => {
    if (curPathDashOffset.current - GAP <= 0) {
      props?.onClick({} as any);
      isRunning.current = false;
    }
    curPathDashOffset.current -= GAP;
    meterPathRef.current.stroke({
      dashoffset: Math.max(0, curPathDashOffset.current),
    });
    if (isRunning.current) window.requestAnimationFrame(step);
    else {
      meterPathRef.current.stroke({
        dashoffset: dashArraySize.current - DEFAULT_OFFSET,
      });
      curPathDashOffset.current = dashArraySize.current - DEFAULT_OFFSET;
    }
  }, [props]);

  const onMouseDown = useCallback(() => {
    if (props.disabled) return;
    isRunning.current = true;
    window.requestAnimationFrame(step);
  }, [props.disabled, step]);
  const onMouseUp = () => {
    isRunning.current = false;
  };

  useEffect(() => {
    const svgContainer: HTMLDivElement = document.querySelector('#progressSVG');
    if (svgContainer && btnContainerRef.current) {
      const { clientWidth, clientHeight } = btnContainerRef.current;
      progressSVGRef.current = SVG().addTo(svgContainer)
        .size(clientWidth, clientHeight).addClass(style.svg);
    }
  }, []);

  useEffect(() => {
    if (progressSVGRef.current && btnContainerRef.current) {
      const { clientWidth, clientHeight } = btnContainerRef.current;
      const canvas = progressSVGRef.current;
      const d = roundedRectData(clientWidth, clientHeight, 4, 4, 4, 4);
      // eslint-disable-next-line no-bitwise
      dashArraySize.current = (clientWidth + clientHeight) << 1;
      canvas.path(d).stroke('#1583d8').fill('rgba(0, 0, 0, 0)').addClass(style.background);
      meterPathRef.current = canvas.path(d).stroke({
        color: '#1583d8',
        dasharray: `${dashArraySize.current}`,
        dashoffset: dashArraySize.current - DEFAULT_OFFSET,
      }).fill('rgba(0, 0, 0, 0)').addClass(style.meter);

      curPathDashOffset.current = dashArraySize.current - DEFAULT_OFFSET;

      const d2 = roundedRectData(clientWidth - 4, clientHeight - 4, 4, 4, 4, 4);
      canvas.path(d2).fill('#004d89').addClass(style.fill);
    }
  }, [props.children]);

  return (
    <div
      className={`${props.containerClass} ${style.buttonContainer} ${style.interactiveContainer} ${className(style.disabled, props.disabled, style.clickable)}`}
      role="button"
      tabIndex={0}
      ref={btnContainerRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <div className={style.interactiveSVGContainer} id="progressSVG" />
      <div
        className={`${style.buttonContent} ${style.interactiveContent}`}
      >
        { props.children }
      </div>
    </div>
  );
};

InteractiveButton.defaultProps = {
  onClick: () => {},
  disabled: false,
  containerClass: '',
} as IInteractiveButtonProps;

const Button: FC<IButtonProps> = (props) => (
  <div
    className={`${props.containerClass} ${style.buttonContainer} ${className({
      [style.polygonContainer]: () => props.type === 'default',
      [style.plainContainer]: () => props.type === 'plain',
    })} ${className(style.disabled, props.disabled, style.clickable)}`}
    role="button"
    tabIndex={0}
    onKeyDown={props.onKeyDown}
    onClick={props.disabled ? () => {} : props.onClick}
  >
    <div
      className={`${style.buttonContent} ${className({
        [style.polygonContent]: () => props.type === 'default',
        [style.plainContent]: () => props.type === 'plain',
      })}`}
    >
      { props.children }
    </div>
  </div>
);

Button.defaultProps = {
  onClick: () => {},
  onKeyDown: () => {},
  disabled: false,
  containerClass: '',
  type: 'default',
  // loading: false,
};

export { Button, InteractiveButton };
