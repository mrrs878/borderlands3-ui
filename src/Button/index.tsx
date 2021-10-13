/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-12 10:10:40
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-13 21:21:23
 * @FilePath: \borderlands3-ui\src\Button\index.tsx
 */
import React, { DOMAttributes, FC } from 'react';
import { className } from '../utils';
import style from './index.module.less';

interface IButtonProps {
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
  onKeyDown?: DOMAttributes<HTMLDivElement>['onKeyDown'];
  disabled?: boolean;
  // loading?: boolean;
}

const Button: FC<IButtonProps> = (props) => (
  <div
    className={`${style.buttonContainer} ${className(style.disabled, props.disabled, style.clickable)}`}
    role="button"
    tabIndex={0}
    onKeyDown={props.onKeyDown}
    onClick={props.onClick}
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
  // loading: false,
};

export { Button };
