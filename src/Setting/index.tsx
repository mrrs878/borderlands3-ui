/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-09 21:03:35
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-24 19:51:20
 * @FilePath: \borderlands3-ui\src\Setting\index.tsx
 */
import React, {
  CSSProperties, FC, useEffect, useRef,
} from 'react';
import { Svg, SVG } from '@svgdotjs/svg.js';
import { clone } from 'lodash';
import style from './index.module.less';
import { className } from '../utils';

interface ISettingItem {
  title: string;
  key: string;
  options: Array<string>;
  activedIndex: number;
}

type SettingItems = Record<string, Array<ISettingItem>>;

interface ISettingProps {
  containerClass?: string;
  style?: CSSProperties;
  items: SettingItems;
  // eslint-disable-next-line react/no-unused-prop-types
  onChange: (newConfig: SettingItems) => void;
}

interface IArrowProps {
  direction: 'left' | 'right',
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

interface IItemProps {
  item: ISettingItem;
  groupsTitle: string;
  itemIndex: number;
}

const Setting: FC<ISettingProps> = (props) => {
  const settingBackgroundSVGRef = useRef<Svg>(null);

  useEffect(() => {
    const container = document.querySelector('#settingBackgroundSVGRef');
    if (container) {
      settingBackgroundSVGRef.current = SVG().addTo('#settingBackgroundSVGRef').addClass(style.backgroundSvg);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (settingBackgroundSVGRef.current) {
        const svgContainer = document.querySelector('#settingBackgroundSVGRef');
        const { clientWidth, clientHeight } = svgContainer;
        const offset1 = 8;
        const titleWidth = 150;
        const offset2 = 5;

        settingBackgroundSVGRef.current.polygon([
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

        settingBackgroundSVGRef.current.polygon([
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

        settingBackgroundSVGRef.current.text('ACCESSIBILITY')
          .attr({
            style: 'font-size: 20px',
          })
          .center(clientWidth / 2, offset2 / 2)
          .fill('#fff');

        settingBackgroundSVGRef.current.rect(clientWidth - 8, offset1 * 2)
          .x(4)
          .y(offset1 * 2)
          .fill('#131418');

        settingBackgroundSVGRef.current.rect(clientWidth - 8, clientHeight - offset1 * 8)
          .x(4)
          .y(offset1 * 4)
          .fill('#041724');

        settingBackgroundSVGRef.current.polygon([
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

  const Item = ({ item, groupsTitle, itemIndex }: IItemProps) => {
    const onLeftArrowClick = () => {
      const newIndex = item.activedIndex === 0 ? item.options.length - 1 : item.activedIndex - 1;
      const tmp = clone(props.items);
      tmp[groupsTitle][itemIndex].activedIndex = newIndex;
      props.onChange?.(tmp);
    };
    const onRightArrowClick = () => {
      const newIndex = item.activedIndex === item.options.length - 1 ? 0 : item.activedIndex + 1;
      const tmp = clone(props.items);
      tmp[groupsTitle][itemIndex].activedIndex = newIndex;
      props.onChange?.(tmp);
    };
    return (
      <div className={style.item}>
        <span className={style.itemTitle}>{ item.title }</span>
        <div className={style.itemOptionContainer}>
          {
            item.options.length > 1 && (
              <Arrow direction="left" onClick={onLeftArrowClick} />
            )
          }
          <span className={style.itemOption}>{ item.options[item.activedIndex] }</span>
          {
            item.options.length > 1 && (
              <Arrow direction="right" onClick={onRightArrowClick} />
            )
          }
        </div>
      </div>
    );
  };

  return (
    <div className={`${style.container} ${props.containerClass}`} style={props.style}>
      <div className={style.background} id="settingBackgroundSVGRef" />
      <div className={style.content}>
        {
          Reflect.ownKeys(props.items).map((groupsTitle: string) => (
            <div key={groupsTitle}>
              <div className={style.groupTitle}>{ groupsTitle }</div>
              <div>
                {
                  props.items[groupsTitle].map((item, index) => (
                    <Item key={item.key} item={item} itemIndex={index} groupsTitle={groupsTitle} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      { props.children }
    </div>
  );
};

Setting.defaultProps = {
  containerClass: '',
  style: {},
};

export { Setting, SettingItems };
