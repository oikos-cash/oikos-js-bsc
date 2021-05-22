import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/bsc/Depot';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Depot(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Depot'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolver = async () => {
    return await this.contract.resolver();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.minimumDepositAmount = async () => {
    return await this.contract.minimumDepositAmount();
  };

  /**
   * Exchange ETH to oUSD while insisting on a particular rate. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rate.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynthsAtRate = async (guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForSynthsAtRate(guaranteedRate, txParams);
  };

  /**
   * Calculate how many synths you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.synthsReceivedForEther = async amount => {
    return await this.contract.synthsReceivedForEther(amount);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.maxBNBPurchase = async () => {
    return await this.contract.maxBNBPurchase();
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
   * Transaction (consumes gas, requires signer)
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setPaused = async (_paused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPaused(_paused, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };

  /**
   * Exchange ETH to oUSD.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForSynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForSynths(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSelfDestructBeneficiary(_beneficiary, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.fundsWallet = async () => {
    return await this.contract.fundsWallet();
  };

  /**
   * Calculate how many SNX you will receive if you transfer an amount of synths.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.oikosReceivedForSynths = async amount => {
    return await this.contract.oikosReceivedForSynths(amount);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.terminateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSellableDeposits = async () => {
    return await this.contract.totalSellableDeposits();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _resolver {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setResolver = async (_resolver, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolver(_resolver, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param synthAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeSynthsForOKS = async (synthAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeSynthsForOKS(synthAmount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForOKS = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForOKS(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused();
  };

  /**
   * Set the funds wallet where ETH raised is held.<br>
   * Transaction (consumes gas, requires signer)
   * @param _fundsWallet {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFundsWallet = async (_fundsWallet, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFundsWallet(_fundsWallet, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositStartIndex = async () => {
    return await this.contract.depositStartIndex();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param synthAmount {BigNumber}
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeSynthsForOKSAtRate = async (synthAmount, guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeSynthsForOKSAtRate(synthAmount, guaranteedRate, txParams);
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
   * Allows the owner to withdraw SNX from this contract if needed.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawOikos = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.withdrawOikos(amount, txParams);
  };

  /**
   * Allows a user to withdraw all of their previously deposited synths from this contract if needed. Developer note: We could keep an index of address to deposits to make this operation more efficient but then all the other operations on the queue become less efficient. It's expected that this function will be very rarely used, so placing the inefficiency here is intentional. The usual use case does not involve a withdrawal.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.withdrawMyDepositedSynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.withdrawMyDepositedSynths(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _maxBNBPurchase {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxBNBPurchase = async (_maxBNBPurchase, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxBNBPurchase(_maxBNBPurchase, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.selfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * Set the minimum deposit amount required to depoist oUSD into the FIFO queue.<br>
   * Transaction (consumes gas, requires signer)
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinimumDepositAmount = async (_amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinimumDepositAmount(_amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.deposits = async uint256_1 => {
    return await this.contract.deposits(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.initiateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.smallDeposits = async address_1 => {
    return await this.contract.smallDeposits(address_1);
  };

  /**
   * Calculate how many SNX you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.oikosReceivedForEther = async amount => {
    return await this.contract.oikosReceivedForEther(amount);
  };

  /**
   * DepositSynths: Allows users to deposit synths via the approve / transferFrom workflow if they'd like. You can equally just transfer synths to this contract and it will work exactly the same way but with one less call (and therefore cheaper transaction fees).<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.depositSynths = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.depositSynths(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedEtherRate {BigNumber}
   * @param guaranteedOikosRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForOKSAtRate = async (guaranteedEtherRate, guaranteedOikosRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForOKSAtRate(
      guaranteedEtherRate,
      guaranteedOikosRate,
      txParams
    );
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositEndIndex = async () => {
    return await this.contract.depositEndIndex();
  };
}

export default Depot;
