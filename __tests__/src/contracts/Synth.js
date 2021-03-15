import { OikosJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as snx from '@oikos/oikos-bsc';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'Synth';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let snxjs;
    beforeAll(() => {
      snxjs = new OikosJs({ networkId });
    });

    ['oUSD', 'oBTC', 'iBTC', 'sAUD'].forEach(synth => {
      describe(synth, () => {
        test(`${network} Should have correct address and ABI`, () => {
          () => {
            expect(snxjs[synth].contract.address).toEqual(
              snx.getTarget({ network, contract: `Proxy${synth}` }).address
            );
          };
        });

        test(`${network} Should have correct ABI`, () => {
          () => {
            expect(snxjs[synth].contract.interface.abi).toEqual(
              snx.getSource({ network, contract }).abi
            );
          };
        });
      });
    });
  });
});
