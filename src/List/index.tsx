/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-12-21 18:51:26
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-24 19:52:21
 * @FilePath: \borderlands3-ui\src\List\index.tsx
 */

import { Svg, SVG } from '@svgdotjs/svg.js';
import React, {
  CSSProperties, FC, useEffect, useRef,
} from 'react';
import { Picker } from '../Picker';
import style from './index.module.less';

interface IListItem {
  content: string | any;
  title: string;
}

type ListItems = Record<string, Array<IListItem>>;

interface IListProps {
  items: ListItems;
  containerClass?: string;
  containerstyle?: CSSProperties;
  pickerContainerStyle?: CSSProperties;
  pickerContainerClassName?: string;
  pickerTitleStyle?: CSSProperties;
  pickerTitleClassName?: string;
  pickerOptionStyle?: CSSProperties;
  pickerOptionClassName?: string;
}

const List: FC<IListProps> = (props) => {
  const listBackgroundSVGRef = useRef<Svg>(null);

  useEffect(() => {
    const container = document.querySelector('#listBackgroundSVGRef');
    if (container) {
      listBackgroundSVGRef.current = SVG().addTo('#listBackgroundSVGRef').addClass(style.backgroundSvg);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (listBackgroundSVGRef.current) {
        const svgContainer = document.querySelector('#listBackgroundSVGRef');
        const { clientWidth, clientHeight } = svgContainer;
        const offset1 = 8;
        const titleWidth = 150;
        const offset2 = 5;

        listBackgroundSVGRef.current.polygon([
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

        listBackgroundSVGRef.current.polygon([
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

        listBackgroundSVGRef.current.text('ACCESSIBILITY')
          .attr({
            style: 'font-size: 20px',
          })
          .center(clientWidth / 2, offset2 / 2)
          .fill('#fff');

        listBackgroundSVGRef.current.rect(clientWidth - 8, offset1 * 2)
          .x(4)
          .y(offset1 * 2)
          .fill('#131418');

        listBackgroundSVGRef.current.rect(clientWidth - 8, clientHeight - offset1 * 8)
          .x(4)
          .y(offset1 * 4)
          .fill('#041724');

        listBackgroundSVGRef.current.polygon([
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
    <div className={`${style.container} ${props.containerClass}`} style={props.containerstyle}>
      <div className={style.background} id="listBackgroundSVGRef" />
      <div className={style.content}>
        {
          Reflect.ownKeys(props.items).map((groupsTitle: string) => (
            <div key={groupsTitle}>
              <div className={style.groupTitle}>{ groupsTitle }</div>
              <div>
                {
                  props.items[groupsTitle].map((item) => (typeof item.content === 'string'
                    ? (
                      <Picker
                        containerClassName={`${style.pickerContainer} ${props.pickerContainerClassName}`}
                        containerStyle={props.pickerContainerStyle}
                        optionClassName={props.pickerOptionClassName}
                        optionStyle={props.pickerOptionStyle}
                        titleClassName={props.pickerTitleClassName}
                        titleStyle={props.pickerTitleStyle}
                        title={item.title}
                        options={[item.content]}
                        activedIndex={0}
                      />
                    )
                    : <item.content />))
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

List.defaultProps = {
  containerClass: '',
  containerstyle: {},
  pickerContainerStyle: {},
  pickerContainerClassName: '',
  pickerTitleStyle: {},
  pickerTitleClassName: '',
  pickerOptionStyle: {},
  pickerOptionClassName: '',
};

export { List, ListItems };
