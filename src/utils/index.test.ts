/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-15 15:07:53
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-26 21:17:44
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
