import { OikosJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as oks from '@oikos/oikos-bsc';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'Synth';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let oksjs;
    beforeAll(() => {
      oksjs = new OikosJs({ networkId });
    });

    ['oUSD', 'oBTC', 'iBTC', 'sAUD'].forEach(synth => {
      describe(synth, () => {
        test(`${network} Should have correct address and ABI`, () => {
          () => {
            expect(oksjs[synth].contract.address).toEqual(
              oks.getTarget({ network, contract: `Proxy${synth}` }).address
            );
          };
        });

        test(`${network} Should have correct ABI`, () => {
          () => {
            expect(oksjs[synth].contract.interface.abi).toEqual(
              oks.getSource({ network, contract }).abi
            );
          };
        });
      });
    });
  });
});
