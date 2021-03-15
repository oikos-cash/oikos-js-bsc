import { getDefaultProvider } from 'ethers';
import addresses from '../lib/addresses';
import ABIS from '../lib/abis';
import synths from '../lib/synths';

const SUPPORTED_NETWORKS = {
  97: 'bsc',
};

class ContractSettings {
  /**
   * @constructor
   * @param provider {Object} - ethers.js provider object - default ethers.providers.getDefaultProvider()
   * @param signer {Object} - one of 4 provided signers or a custom ethers.js compatible signer. Use Metamask for Dapp browser support
   * @param networkId {Number} - default 1 - mainnet, also supports 42 (Kovan)
   */
  constructor(contractSettings) {
    console.log(contractSettings);
    contractSettings = contractSettings || {};
    const { provider, signer, networkId } = contractSettings;
    this.networkId = networkId || 1;
    this.network = SUPPORTED_NETWORKS[Number(this.networkId)];
    this.provider =
      provider || getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
    if (!provider && networkId) {
      this.provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
    }
    this.signer = signer;
    this.addressList = addresses[this.networkId];
    this.synths = synths[this.networkId];
    this.ABIS = ABIS[this.network];
  }
}

ContractSettings.SUPPORTED_NETWORKS = SUPPORTED_NETWORKS;

export default ContractSettings;
