/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-14 10:47:21
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-14 21:53:24
 * @FilePath: \borderlands3-ui\src\Dialog\index.tsx
 */
import React, { FC } from 'react';
import { Button } from '../Button';
import style from './index.module.less';

interface IDialogProps {
  visible: boolean;
  title?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
}

const Dialog: FC<IDialogProps> = (props) => (
  props.visible && (
    <div className="dialogWarp">
      <div className={style.dialogMask} />
      <div className={style.dialogContainer}>
        <div className={style.dialogBackground} />
        <div className={style.dialogHeader}>
          <div className={style.dialogHeaderBg} />
          { props.title }
          <div className={style.dialogHeaderLine} />
        </div>
        <div className={style.dialogContent}>
          { props.children }
        </div>
        <div className={style.dialogFooter}>
          <Button
            containerClass={style.dialogFooterBtn}
            onClick={props.onConfirm}
          >
            { props.confirmText }

          </Button>
          <Button
            containerClass={style.dialogFooterBtn}
            onClick={props.onCancel}
          >
            { props.cancelText }

          </Button>
        </div>
      </div>
    </div>
  )
);

Dialog.defaultProps = {
  title: '',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  onCancel: () => {},
  onConfirm: () => {},
};

export { Dialog };
