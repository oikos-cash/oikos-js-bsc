require('@babel/register');

const BigNumber = require('bignumber.js');

const repl = require('repl');
const { OikosJs } = require('./src/index.node');
const oksjs = new OikosJs();

const bn = o => BigNumber(o._hex).toString();

console.log('OikosJs is available from the oks variable. More utils: ctx');
console.log('Use the PRIVATE_KEY environment variable to set the private key.');

const context = repl.start('> ').context;
const ctx = {
  oks: oksjs,
  BigNumber,
  b32: oksjs.ethers.utils.formatBytes32String,
  pb32: oksjs.ethers.utils.parseBytes32String,
  bn
};

Object.assign(context, ctx);