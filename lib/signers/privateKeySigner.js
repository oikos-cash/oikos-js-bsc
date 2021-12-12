import { Wallet, getDefaultProvider } from 'ethers';
import ContractSettings from '../../src/contractSettings';

const PrivateKeySigner = function(
  provider,
  networkId,
  privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123'
) {
  if (networkId && !provider) {
    provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
  }
  return new Wallet(
    privateKey,
    provider || getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545')
  );
};

export default PrivateKeySigner;
