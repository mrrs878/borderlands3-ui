/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-14 10:50:41
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-15 11:14:35
 * @FilePath: \borderlands3-ui\src\Dialog\Dialog.stories.tsx
 */
import React, { useState } from 'react';
import { Dialog } from '.';
import { Button } from '../Button';

export default {
  component: Dialog,
  title: 'Dialog',
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  const openDialog = () => setVisible(true);

  const closeDialog = () => setVisible(false);

  // Posterama Text Regular
  return (
    <>
      <Button onClick={openDialog}>open dialog</Button>
      <Dialog visible={visible} onCancel={closeDialog} title="Quit Game?">
        <p style={{ fontFamily: 'Posterama Text Regular', marginTop: '40px' }}>Aue you sure you want to quit the game?</p>
      </Dialog>
    </>
  );
};
