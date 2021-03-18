import * as snx from '@oikos/oikos-bsc';
import { OikosJs } from '../../src/index.node.js';
import ContractSettings from '../../src/contractSettings';
import { contracts } from '../../tools/abitojs';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('auto-generated contracts', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    describe(network, () => {
      let snxjs;
      beforeAll(() => {
        console.log({ networkId, network });
        snxjs = new OikosJs({ networkId });
      });

      Object.entries(contracts).forEach(([contract, settings]) => {
        describe(contract, () => {
          test(`${network} Should have correct address `, () => {
            () => {
              const targetContract =
                typeof settings === 'object' ? settings.target || contract : contract;

              expect(snxjs[contract].contract.address).toEqual(
                snx.getTarget({ network, contract: targetContract }).address
              );
            };
          });

          test(`${network} Should have correct ABI`, () => {
            () => {
              const source = typeof settings === 'object' ? settings.source || contract : contract;

              expect(snxjs[contract].contract.interface.abi).toEqual(
                snx.getSource({ network, contract: source }).abi
              );
            };
          });
        });
      });
    });
  });
});
