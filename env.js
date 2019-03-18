const fse = require('fs-extra');
const path = require('path');

const env = process.env.NODE_ENV || 'test';
console.info('object', env);
const contentSrc = path.join(__dirname, `./src/config/env_${env}.js`);
const contentDist = path.join(__dirname, `./static/env.js`);

const data = fse.readFileSync(contentSrc, 'utf-8');
fse.outputFileSync(contentDist, data);