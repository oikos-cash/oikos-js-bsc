import { ethers, getDefaultProvider } from 'ethers';
import addresses from '../lib/addresses';
import ABIS from '../lib/abis';
import synths from '../lib/synths';

const SUPPORTED_NETWORKS = {
  56: 'bsc',
  97: 'testnet',
};

const network2providerUrl = {
  bsc: 'https://bsc-dataseed.binance.org',
  testnet: 'https://data-seed-prebsc-2-s3.binance.org:8545',
};

class ContractSettings {
  /**
   * @constructor
   * @param provider {Object} - ethers.js provider object - default ethers.providers.getDefaultProvider()
   * @param signer {Object} - one of 4 provided signers or a custom ethers.js compatible signer. Use Metamask for Dapp browser support
   * @param networkId {Number} - default 56 - mainnet, also supports 97 (Testnet)
   */
  constructor(contractSettings) {
    contractSettings = contractSettings || {};
    const { provider, signer, networkId } = contractSettings;
    this.networkId = networkId || 56;
    this.network = SUPPORTED_NETWORKS[Number(this.networkId)];
    this.provider = ethers.getDefaultProvider(network2providerUrl[this.network]);
    if (!provider && networkId) {
      this.provider = ethers.getDefaultProvider(network2providerUrl[this.network]);
      console.log(SUPPORTED_NETWORKS[Number(this.networkId)]);
      console.log(network2providerUrl[this.network]);
      console.log(provider);
    }
    this.signer = signer;
    this.addressList = addresses[this.networkId];
    this.synths = synths[this.networkId];
    this.ABIS = ABIS[this.network];
  }
}

ContractSettings.SUPPORTED_NETWORKS = SUPPORTED_NETWORKS;

export default ContractSettings;
