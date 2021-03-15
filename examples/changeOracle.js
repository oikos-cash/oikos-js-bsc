const { OikosJs } = require('../dist/main.node.js');
const { ethers, getDefaultProvider } = require("ethers");
const BN = require('bignumber.js');

const network = "bsc"; 
const networkId = 97;
const provider = getDefaultProvider("https://data-seed-prebsc-2-s3.binance.org:8545")
const signer = new OikosJs.signers.PrivateKey(
  provider,
  network,
  process.env.PRIVATE_KEY
);

const snxJS = new OikosJs({ networkId, signer });

const run = async () => {
    const res = await snxJS.ExchangeRates.setOracle('0xdC67748e4986C4c1043BBA5C4A068DE600004962', {gasLimit:15000000, gasPrice:10000000000});
    console.log(BN(res.gasPrice._hex).toFixed());
    console.log(BN(res.gasLimit._hex).toFixed());
    console.log(res)
} 

run()