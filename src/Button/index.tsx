/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 10:10:40
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-15 11:12:27
 * @FilePath: \borderlands3-ui\src\Button\index.tsx
 */
import React, { DOMAttributes, FC } from 'react';
import { className } from '../utils';
import style from './index.module.less';

interface IButtonProps {
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
  onKeyDown?: DOMAttributes<HTMLDivElement>['onKeyDown'];
  disabled?: boolean;
  containerClass?: string;
  // loading?: boolean;
}

const Button: FC<IButtonProps> = (props) => (
  <div
    className={`${props.containerClass} ${style.buttonContainer} ${className(style.disabled, props.disabled, style.clickable)}`}
    role="button"
    tabIndex={0}
    onKeyDown={props.onKeyDown}
    onClick={props.disabled ? () => {} : props.onClick}
  >
    <div className={style.buttonContent}>
      { props.children }
    </div>
  </div>
);

Button.defaultProps = {
  onClick: () => {},
  onKeyDown: () => {},
  disabled: false,
  containerClass: '',
  // loading: false,
};

export { Button };
