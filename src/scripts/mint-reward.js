import { OikosJs } from '../index.node';
//import { guessNetworkId } from '../network2id';
import { ethers, getDefaultProvider } from 'ethers';
const asset = require('./SupplySchedule.json');

const BN = require('bignumber.js');

const network = 'bsc';
const networkId = 97;
const provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
const signer = new OikosJs.signers.PrivateKey(provider, network, process.env.PRIVATE_KEY);

const snx = new OikosJs({ networkId, signer });

const run = async () => {
  const SupplySchedule = new ethers.Contract(
    '0x646468BaE51c2c580088C762d6f14269B481884F',
    asset.abi,
    provider
  );

  const lastMintEvent = await SupplySchedule.lastMintEvent();

  console.log(`Last mint event ${BN(lastMintEvent._hex).toString()}`);

  const res = await snx.Oikos.mint({
    gasLimit: 250000,
  });
  console.log(res);
};

run().catch(console.error);
