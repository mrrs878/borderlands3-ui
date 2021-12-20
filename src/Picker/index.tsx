/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-20 20:18:34
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-20 20:57:30
 */

import React, { CSSProperties, FC } from 'react';
import { className } from '../utils';
import style from './index.module.less';

enum ArrowDirection {
  left = 'left',
  right = 'right',
}

interface IArrowProps {
  direction: ArrowDirection,
  onClick?: () => void;
}

const Arrow: FC<IArrowProps> = (props) => (
  <div
    onClick={props.onClick}
    onKeyPress={() => {}}
    role="button"
    tabIndex={0}
    className={`${style.arrowContainer} ${className(style.arrowContainerLeft, props.direction === 'left', style.arrowContainerRight)}`}
  >
    <div className={style.arrow} />
    <div className={style.arrow} />
  </div>
);
Arrow.defaultProps = {
  onClick: () => {},
};

interface IPickerProps {
  title: string;
  options: Array<string>;
  activedIndex: number;
  containerStyle?: CSSProperties;
  containerClassName?: string;
  titleStyle?: CSSProperties;
  titleClassName?: string;
  optionStyle?: CSSProperties;
  optionClassName?: string;
  onChange: (newConfig: number, direction: ArrowDirection) => void;
}

const Picker: FC<IPickerProps> = (props) => {
  const {
    title, options, activedIndex,
    containerStyle, containerClassName,
    titleClassName, titleStyle,
    optionStyle, optionClassName,
  } = props;

  const onLeftArrowClick = () => {
    const newIndex = activedIndex === 0 ? options.length - 1 : activedIndex - 1;
    props.onChange?.(newIndex, ArrowDirection.left);
  };
  const onRightArrowClick = () => {
    const newIndex = activedIndex === options.length - 1 ? 0 : activedIndex + 1;
    props.onChange?.(newIndex, ArrowDirection.right);
  };
  return (
    <div className={`${style.container} ${containerClassName}`} style={containerStyle}>
      <span className={`${style.title} ${titleClassName}`} style={titleStyle}>{ title }</span>
      <div className={style.optionContainer}>
        {
          options.length > 1 && (
            <Arrow direction={ArrowDirection.left} onClick={onLeftArrowClick} />
          )
        }
        <span className={`${style.option} ${optionClassName}`} style={optionStyle}>{ options[activedIndex] }</span>
        {
          options.length > 1 && (
            <Arrow direction={ArrowDirection.right} onClick={onRightArrowClick} />
          )
        }
      </div>
    </div>
  );
};

Picker.defaultProps = {
  containerStyle: {},
  containerClassName: '',
  titleStyle: {},
  titleClassName: '',
  optionStyle: {},
  optionClassName: '',
};

export { Picker, ArrowDirection };
