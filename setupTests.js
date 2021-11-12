/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-08-26 16:57:59
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-11-10 20:21:19
 * @FilePath: \borderlands3-ui\setupTests.js
 */

import '@testing-library/jest-dom';
import { setupJestScreenshot } from 'jest-screenshot';

setupJestScreenshot();

Object.defineProperty(global.SVGElement.prototype, 'getScreenCTM', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(global.SVGElement.prototype, 'getBBox', {
  writable: true,
  value: jest.fn().mockReturnValue({
    x: 0,
    y: 0,
  }),
});

Object.defineProperty(global.SVGElement.prototype, 'getComputedTextLength', {
  writable: true,
  value: jest.fn().mockReturnValue(0),
});

Object.defineProperty(global.SVGElement.prototype, 'createSVGMatrix', {
  writable: true,
  value: jest.fn().mockReturnValue({
    x: 10,
    y: 10,
    inverse: () => {},
    multiply: () => {},
  }),
});
