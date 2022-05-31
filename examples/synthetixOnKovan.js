'use strict';

const { OikosJs } = require('../dist/main.node.js');

const { getDefaultProvider, Wallet } = require('ethers');
const wallet = Wallet.createRandom();
const oksjs = new OikosJs({
  signer: new OikosJs.signers.PrivateKey(getDefaultProvider('kovan'), 42, wallet.privateKey),
  networkId: 42, // kovan
});

(async function() {
  const totalSNX = await oksjs.Oikos.totalSupply();
  const snxTotalSupply = oksjs.utils.formatEther(totalSNX);
  console.log('SNXTotalSupply on ', oksjs.contractSettings.network.toUpperCase(), snxTotalSupply);
  const synths = oksjs.contractSettings.synths.map(({ name }) => name).join(',');
  console.log('Supported synths: ', synths);
})();
