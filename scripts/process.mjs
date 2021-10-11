/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-08-18 13:58:53
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-11 19:36:40
 * @FilePath: \borderlands3-ui\scripts\process.mjs
 */
// @ts-check
import fs from 'fs-extra';
import path from 'path';
import glob from 'glob';
import chokidar from 'chokidar';
// @ts-ignore
import { rootDir } from './utils.mjs';

// svelte file: compile
// other files: copy
async function transform(file, dir = 'lib') {
  const dest = file.replace('/src/', `/${dir}/`);
  await fs.ensureDir(path.dirname(dest));

  if (fs.statSync(file).isDirectory()) return;

  await fs.copyFile(file, dest);
}

function watch(pattern, dest) {
  chokidar.watch(pattern).on('all', (event, file) => {
    console.log(event, file);
    transform(file, dest);
  });
}

function build(pattern, dir) {
  glob(pattern, (err, files) => {
    if (err) throw err;

    // eslint-disable-next-line no-restricted-syntax
    for (const file of files) {
      transform(file, dir);
    }
  });
}

const pattern = path.resolve(
  rootDir,
  'packages/*/src/**/*.{svelte,vue,json,wxml,wxss}',
);
const mpPattern = path.resolve(
  rootDir,
  'packages/mp/src/**/*.{svelte,vue,json,wxml,wxss}',
);

if (process.argv.includes('--watch')) {
  watch(pattern);
  watch(mpPattern, 'dist');
} else {
  build(pattern);
  build(mpPattern, 'dist');
}
