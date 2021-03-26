require('@babel/register');
const BigNumber = require('bignumber.js');
//const { guessNetworkId } = require('./src/network2id');
const { ethers, getDefaultProvider } = require("ethers");

const repl = require('repl');

const { OikosJs } = require('./src/index.node');
const networkId = 56 //guessNetworkId();

// const networkId = network2id(process.env.TRON_NETWORK || 'shasta');
// snxjs.contractSettings.tronWeb.setPrivateKey(process.env.PRIVATE_KEY);

const provider = getDefaultProvider("https://bsc-dataseed.binance.org")
const signer = new OikosJs.signers.PrivateKey(
  provider,
  networkId,
  process.env.PRIVATE_KEY
);

const oksjs = new OikosJs({ networkId, signer });

const bn = o => BigNumber(o._hex).toString();
// module.exports = snxjs;

console.log({ networkId });
console.log('OikosJs is available from the snx variable. More utils: ctx');
console.log('Use the PRIVATE_KEY environment variable to set the private key.');

const context = repl.start('> ').context;
const ctx = {
  oks: oksjs,
  BigNumber,
  b32: oksjs.ethers.utils.formatBytes32String,
  bn,
  //Tronweb: require('tronweb'),
  //tronweb: snxjs.contractSettings.tronWeb,
};
Object.assign(context, ctx);