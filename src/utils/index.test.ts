/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-15 15:07:53
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-15 15:11:15
 * @FilePath: \borderlands3-ui\src\utils\index.test.ts
 */
import { className } from '.';

describe('utils', () => {
  it('className should be defined', () => {
    expect(className).toBeDefined();
  });

  it('return the first class name when the condition is true', () => {
    const res = className('.active', true);

    expect(res).toEqual('.active');
  });

  it('return the second class name when the condition is false', () => {
    const res = className('.active', false, '.disable');

    expect(res).toEqual('.disable');
  });
});
