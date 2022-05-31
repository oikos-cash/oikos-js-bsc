import ContractSettings from '../../src/contractSettings';
import addresses from '../../lib/addresses';
import * as oks from '@oikos/oikos-bsc';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('lib/addresses', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same addresses and those in SNX package`, () => {
      Object.entries(addresses[networkId]).forEach(([contract, address]) => {
        expect(address).toEqual(oks.getTarget({ network, contract }).address);
      });
    });
  });
});
