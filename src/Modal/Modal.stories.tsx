/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 21:10:00
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-21 20:28:42
 * @FilePath: \borderlands3-ui\src\Modal\Modal.stories.tsx
 */
// Generated with util/create-component.js
import React, { useState } from 'react';
import { Modal } from '.';
import { Button } from '../Button';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);

  const closeModal = () => setVisible(false);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button onClick={openModal}>open</Button>
      <Modal
        maskCloseable
        onClose={closeModal}
        visible={visible}
        style={{ width: 500, height: 300 }}
      >
        <div style={{
          textAlign: 'center',
          paddingTop: 5,
          width: 492,
          height: 292,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
        }}
        >
          <div style={{ fontSize: '26px', margin: 5, color: '#19fcff' }}>Action Skill Unlocked</div>
          <div>
            <img style={{ width: 492 }} src="https://mrrsblog.oss-cn-shanghai.aliyuncs.com/actionSkillUnlocked.png" alt="" srcSet="" />
          </div>
          <div style={{ flex: 1, width: '100%', color: '#9adbfb' }}>
            Congratulations! You&apos;ve leveled up. Leveling up permanently increases yourhealth.
            It also immediately gives you full health and shields.
            Most importantly, you&apos;ve unlocked your action skills.
            You have three actionskills to choose from. View and equip your skills by pressing Tand
            navigating to the skills screen.
          </div>
          <div style={{
            height: 30,
            width: '100%',
            color: '#fff',
            lineHeight: '30px',
          }}
          >
            exit
          </div>
        </div>
      </Modal>
    </div>
  );
};
