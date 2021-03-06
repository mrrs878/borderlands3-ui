/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-15 15:07:53
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-12-21 21:49:51
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

  it('return the first class name when it is string (a class name)', () => {
    const res = className('.active');

    expect(res).toEqual('.active');
  });

  it('return empty when the first class name is false (a class name)', () => {
    expect(className('')).toEqual('');
    expect(className(undefined)).toEqual('');
    expect(className(null)).toEqual('');
  });

  it('return the second class name when the condition is false', () => {
    const res = className('.active', false, '.disable');

    expect(res).toEqual('.disable');
  });

  it('When the parameter is an object, the matched class name can be returned', () => {
    let props = { type: 'default' };
    let name = className({
      default: () => props.type === 'default',
      plain: () => props.type === 'plain',
    });

    expect(name).toEqual('default');

    props = { type: 'interactive' };

    name = className({
      default: () => props.type === 'default',
      plain: () => props.type === 'plain',
    });

    expect(name).toEqual('');
  });
});
