import ContractSettings from '../../src/contractSettings';
import synths from '../../lib/synths';
import * as oks from '@oikos/oikos-bsc';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('lib/synths', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same synths and those in SNX package`, () => {
      expect(synths[networkId]).toEqual(oks.getSynths({ network }));
    });
  });
});
