import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/testnet/OikosState';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function OikosState(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['OikosState'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_ISSUANCE_RATIO = async () => {
    return await this.contract.MAX_ISSUANCE_RATIO();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param value {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendDebtLedgerValue = async (value, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendDebtLedgerValue(value, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.associatedContract = async () => {
    return await this.contract.associatedContract();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.clearIssuanceData = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.clearIssuanceData(account, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns BigNumber
   **/
  this.debtLedger = async uint256_1 => {
    return await this.contract.debtLedger(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.debtLedgerLength = async () => {
    return await this.contract.debtLedgerLength();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.decrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.decrementTotalIssuerCount(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.hasIssued = async account => {
    return await this.contract.hasIssued(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.incrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.incrementTotalIssuerCount(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.issuanceData = async address_1 => {
    return await this.contract.issuanceData(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.issuanceRatio = async () => {
    return await this.contract.issuanceRatio();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastDebtLedgerEntry = async () => {
    return await this.contract.lastDebtLedgerEntry();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _associatedContract {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setAssociatedContract = async (_associatedContract, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAssociatedContract(_associatedContract, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param initialDebtOwnership {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCurrentIssuanceData = async (account, initialDebtOwnership, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCurrentIssuanceData(account, initialDebtOwnership, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _issuanceRatio {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setIssuanceRatio = async (_issuanceRatio, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIssuanceRatio(_issuanceRatio, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.setupExpiryTime = async () => {
    return await this.contract.setupExpiryTime();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuerCount = async () => {
    return await this.contract.totalIssuerCount();
  };
}

export default OikosState;
