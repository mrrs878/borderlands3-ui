/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-11 22:05:00
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-13 16:55:54
 * @FilePath: \borderlands3-ui\rollup.config.js
 */
// @ts-check
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import postcssUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';
import url from 'rollup-plugin-url';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve(),
    typescript(),
    postcss({
      inject: true,
      plugins: [
        autoprefixer({ add: true }),
        postcssUrl({
          url: 'inline',
          maxSize: 10,
        }),
      ],
    }),
    url({
      limit: 10 * 1024,
    }),
  ],
};
