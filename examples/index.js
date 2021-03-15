'use strict';
import { getDefaultProvider } from 'ethers';

const { OikosJs } = require('../dist/main.node.js');

(async function() { 
  const networkId = 97;
  const provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
  const snxjs = new OikosJs({networkId, provider}); //uses default ContractSettings - ethers.js default provider, mainnet
  const b32 = snxjs.ethers.utils.formatBytes32String;
  //const p = await snxjs.ExchangeRates.rateForCurrency(b32('OKS')); 

  const snxPrice = snxjs.utils.formatEther();
  const totalSupply = await snxjs.Oikos.totalSupply();

  console.log('-------------------');
  console.log(`SNX price: ${snxPrice}`);
  console.log('-------------------');
  console.log(`SNX SUPPLY: ${totalSupply}`);
  console.log('-------------------');
  console.log('SYNTH SUPPLY');
  console.log('-------------------');
  const { synths } = snxjs.contractSettings;


  synths.forEach(async ({ name, sign, desc }) => {
    const totalAmount = await snxjs[name].totalSupply();
    const totalSupply = snxjs.utils.formatEther(totalAmount);
    const OKS = await snxjs.Oikos.collateral('0xCD5b38549139E4cf0D9322c4f1C802f89901227b');
    console.log(`${desc} (${name}) ${sign}${totalSupply} ${OKS}`);
  });
})();
