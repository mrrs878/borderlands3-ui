/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-11 19:09:46
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-11 19:36:48
 * @FilePath: \borderlands3-ui\scripts\utils.mjs
 */
// @ts-check
import path from 'path';
import { fileURLToPath } from 'url';

// https://stackoverflow.com/a/50052194
// @ts-ignore
export const rootDir = path.resolve(fileURLToPath(import.meta.url), '../..');
