// @ts-check
import fs from 'fs-extra';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from 'rollup-plugin-typescript2';

const production = !process.env.ROLLUP_WATCH;

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'));

const configs = packages
  .map((key) => {
    const pkg = fs.readJsonSync(`./packages/${key}/package.json`);
    if (pkg.private) return [];

    const inputFile = path.resolve('packages', key, 'src/index.ts');

    /** @type {import('rollup').RollupOptions} */
    const common = {
      input: inputFile,
      plugins: [
        commonjs(),
        resolve({
          browser: true,
          preferBuiltins: false,
        }),
        json(),
        replace({
          preventAssignment: true, // fix warning
          'process.env.NODE_ENV': JSON.stringify(
            production ? 'production' : 'development',
          ),
        }),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss({
          inject: true,
        }),
      ],
      watch: {
        clearScreen: false,
      },
    };

    /** @type {import('rollup').RollupOptions} */
    const config = {
      ...common,
      output: [
        {
          format: 'es',
          sourcemap: true,
          file: path.resolve('packages', key, pkg.module),
        },
        {
          format: 'cjs',
          sourcemap: true,
          file: path.resolve('packages', key, pkg.main),
          exports: 'auto', // fix warning
        },
      ],
      external: [
        'fs',
        'event',
        'readline',
        'assert',
        'path',
        'util',
        'stream',
        'constants',
        'events',
        'ora',
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      ],
    };

    /** @type {import('rollup').OutputOptions} */
    const es5OutputOption = {
      format: 'cjs',
      // name: umdName,
      sourcemap: true,
      globals: { react: 'react' },
      inlineDynamicImports: true,
    };

    /** @type {import('rollup').RollupOptions} */
    const es5Config = {
      ...common,
      input: path.resolve('packages', key, 'src/index.ts'),
      output: [
        {
          ...es5OutputOption,
          file: path.resolve('packages', key, 'dist/index.es5.js'),
        },
        {
          ...es5OutputOption,
          file: path.resolve('packages', key, 'dist/index.es5.min.js'),
          plugins: [terser()],
        },
      ],
      plugins: [
        ...common.plugins,
        babel({
          babelHelpers: 'runtime',
          extensions: ['.js', '.mjs'],
        }),
        nodePolyfills(),
      ],
    };

    return [config, es5Config];
  })
  .flat();

export default [...configs];
