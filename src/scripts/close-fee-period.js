import { OikosJs } from '../index.node';
//import { guessNetworkId } from '../network2id';
//guessNetworkId()
import { ethers, getDefaultProvider } from 'ethers';

const network = 'bsc';
const networkId = 97;
const provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
const signer = new OikosJs.signers.PrivateKey(provider, network, process.env.PRIVATE_KEY);

const oks = new OikosJs({ networkId, signer });

const run = async () => {
  const res = await oks.FeePool.closeCurrentFeePeriod();
  console.log(res);
};

run().catch(console.error);
