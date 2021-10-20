/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2021-10-20 11:59:14
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2021-10-20 14:27:45
 * @FilePath: \borderlands3-ui\scripts\createComponent.js
 */
require('colors');
const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log(`Creating Component Templates with name: ${componentName}`);

const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  const fileName = template.extension === '.stories.tsx' ? componentName : 'index';
  fs.writeFileSync(
    `${componentDirectory}/${fileName}${template.extension}`,
    template.content,
  );
});

console.log(
  `Successfully created component under: ${componentDirectory.green}`,
);
