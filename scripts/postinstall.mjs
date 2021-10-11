/* eslint-disable import/no-extraneous-dependencies */
// @ts-check
import fs from 'fs-extra';
import path from 'path';
// @ts-ignore
import { rootDir } from './utils.mjs';

const packagesDir = path.join(rootDir, 'packages');
const packages = fs.readdirSync(packagesDir);

// tsconfig root
fs.writeJsonSync(
  path.resolve(rootDir, 'tsconfig.json'),
  {
    files: [],
    compilerOptions: {
      jsx: 'react',
      lib: [
        'dom',
        'dom.iterable',
        'esnext',
      ],
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    },
    references: packages.map((p) => ({ path: `packages/${p}` })),
  },
  { spaces: 2 },
);

packages.forEach((p) => {
  // tsconfig
  const tsconfig = {
    extends: '../../tsconfig-base.json',
    include: ['src', 'src/**/*.json'], // https://github.com/microsoft/TypeScript/issues/25636#issuecomment-627111031
    compilerOptions: {
      composite: true,
      rootDir: 'src',
      outDir: 'lib',
    },
  };

  fs.writeJsonSync(path.join(packagesDir, p, 'tsconfig.json'), tsconfig, {
    spaces: 2,
  });

  // license
  fs.copyFileSync(
    path.join(rootDir, 'LICENSE'),
    path.join(packagesDir, p, 'LICENSE'),
  );

  // package.json
  const pkgPath = path.join(packagesDir, p, 'package.json');
  const pkg = fs.readJsonSync(pkgPath);
  pkg.repository = {
    type: 'git',
    url: 'https://github.com/mrrs878/borderlands3-ui.git',
    directory: `packages/${p}`,
  };
  pkg.main = 'dist/index.cjs.js';
  pkg.module = 'dist/index.esm.js';
  pkg.types = 'lib/index.d.ts';
  pkg.unpkg = 'dist/index.min.js';
  pkg.jsdelivr = 'dist/index.min.js';
  pkg.files = ['dist', 'lib'];
  pkg.homepage = 'https://github.com/mrrs878/borderlands3-ui#readme';
  fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
});
