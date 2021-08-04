import { utils } from 'ethers';

import OikosJsBase from './OikosJsBase';
import Trezor from '../lib/signers/trezorSigner';
import Metamask from '../lib/signers/metamaskSigner';
import Ledger from '../lib/signers/ledgerSigner';
import Coinbase from '../lib/signers/coinbaseSigner';
import PrivateKey from '../lib/signers/privateKeySigner';
import WalletConnect from '../lib/signers/walletConnectSigner';
import BSCWallet from '../lib/signers/bscSigner';
import MathWallet from '../lib/signers/mathwalletSigner';

const signers = {
  Trezor,
  Ledger,
  MathWallet,
  Metamask,
  BSCWallet,
  PrivateKey,
  Coinbase,
  WalletConnect,
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
