'use strict';
import { getDefaultProvider } from 'ethers';

const { OikosJs } = require('../dist/main.node.js');

(async function() { 
  const networkId = 97;
  const provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
  const oksjs = new OikosJs({networkId, provider}); //uses default ContractSettings - ethers.js default provider, mainnet
  const b32 = oksjs.ethers.utils.formatBytes32String;
  //const p = await oksjs.ExchangeRates.rateForCurrency(b32('OKS')); 

  const snxPrice = oksjs.utils.formatEther();
  const totalSupply = await oksjs.Oikos.totalSupply();

  console.log('-------------------');
  console.log(`SNX price: ${snxPrice}`);
  console.log('-------------------');
  console.log(`SNX SUPPLY: ${totalSupply}`);
  console.log('-------------------');
  console.log('SYNTH SUPPLY');
  console.log('-------------------');
  const { synths } = oksjs.contractSettings;


  synths.forEach(async ({ name, sign, desc }) => {
    const totalAmount = await oksjs[name].totalSupply();
    const totalSupply = oksjs.utils.formatEther(totalAmount);
    const OKS = await oksjs.Oikos.collateral('0xCD5b38549139E4cf0D9322c4f1C802f89901227b');
    console.log(`${desc} (${name}) ${sign}${totalSupply} ${OKS}`);
  });
})();
