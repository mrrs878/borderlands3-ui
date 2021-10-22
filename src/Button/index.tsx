/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 10:10:40
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-22 19:34:20
 * @FilePath: \borderlands3-ui\src\Button\index.tsx
 */
import React, {
  DOMAttributes, FC, useCallback, useState,
} from 'react';
import { className } from '../utils';
import style from './index.module.less';

type ButtonType = 'default' | 'interactive' | 'plain';

interface IButtonProps {
  type?: ButtonType;
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
  onKeyDown?: DOMAttributes<HTMLDivElement>['onKeyDown'];
  disabled?: boolean;
  containerClass?: string;
}

const InteractiveButton: FC<Omit<IButtonProps, 'type'>> = (props) => {
  const [time, setTime] = useState(0);
  const onKeyDown = useCallback((e) => {
    if (props.disabled) return;
    if (time === 0) {
      setTime(Date.now());
      return;
    }
    if (Date.now() - time >= 3000) {
      props.onClick(e);
    }
  }, [props, time]);
  return (
    <div
      className={`${props.containerClass} ${style.buttonContainer} ${style.interactiveContainer} ${className(style.disabled, props.disabled, style.clickable)}`}
      role="button"
      tabIndex={0}
      onKeyDown={props.onKeyDown}
      onMouseDown={onKeyDown}
    >
      <div
        className={`${style.buttonContent} ${style.interactiveContent}`}
      >
        { props.children }
      </div>
    </div>
  );
};

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
