'use strict';
import { getDefaultProvider } from 'ethers';

const provider = getDefaultProvider("https://bsc-dataseed.binance.org")

const networkId = 56
const { OikosJs } = require('../dist/main');

(async function() { 

  const oksjs = new OikosJs({provider, networkId}); //uses default ContractSettings - ethers.js default provider, mainnet
  const b32 = oksjs.ethers.utils.formatBytes32String;

  let oksPrice = await oksjs.ExchangeRates.rateForCurrency(b32('OKS')); 
  oksPrice = oksjs.utils.formatEther(oksPrice);
  
  let totalSupply = await oksjs.Oikos.totalSupply();
  totalSupply = oksjs.utils.formatEther(totalSupply);

  console.log('-------------------');
  console.log(`OKS price: ${oksPrice}`);
  console.log('-------------------');
  console.log(`OKS SUPPLY: ${totalSupply}`);
  console.log('-------------------');
  console.log('SYNTH SUPPLY');
  console.log('-------------------');

  const { synths } = oksjs.contractSettings;

  synths.forEach(async ({ name, sign, desc }) => {
    const totalAmount = await oksjs[name].totalSupply();
    const totalSupply = oksjs.utils.formatEther(totalAmount);
    console.log(`${desc} (${name}) ${sign} ${totalSupply}`);
  });

})();