import * as oks from '@oikos/oikos-bsc';
import { OikosJs } from '../../src/index.node.js';
import ContractSettings from '../../src/contractSettings';
import { contracts } from '../../tools/abitojs';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('auto-generated contracts', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    describe(network, () => {
      let oksjs;
      beforeAll(() => {
        console.log({ networkId, network });
        oksjs = new OikosJs({ networkId });
      });

      Object.entries(contracts).forEach(([contract, settings]) => {
        describe(contract, () => {
          test(`${network} Should have correct address `, () => {
            () => {
              const targetContract =
                typeof settings === 'object' ? settings.target || contract : contract;

              expect(oksjs[contract].contract.address).toEqual(
                oks.getTarget({ network, contract: targetContract }).address
              );
            };
          });

          test(`${network} Should have correct ABI`, () => {
            () => {
              const source = typeof settings === 'object' ? settings.source || contract : contract;

              expect(oksjs[contract].contract.interface.abi).toEqual(
                oks.getSource({ network, contract: source }).abi
              );
            };
          });
        });
      });
    });
  });
});
