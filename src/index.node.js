import { utils } from 'ethers';

import OikosJsBase from './OikosJsBase';
import PrivateKey from '../lib/signers/privateKeySigner';

const signers = {
  PrivateKey,
};

export class OikosJs extends OikosJsBase {
  /**
   * Creates instances of Oikos contracts based on ContractSettings.
   * Usage example:
   * const {OikosJs} = require('OikosJs');
   * const snxjs = new OikosJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * const totalSupply = await snxjs.Oikos.totalSupply();
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    super(contractSettings, signers);
  }
}

OikosJs.signers = signers;
OikosJs.utils = utils; // shortcut to ethers utils without having to create instance
