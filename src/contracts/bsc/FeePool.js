import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/bsc/FeePool';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function FeePool(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ProxyFeePool'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Transaction (consumes gas, requires signer)
   * @param _feePeriodDuration {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setFeePeriodDuration = async (_feePeriodDuration, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFeePeriodDuration(_feePeriodDuration, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolver = async () => {
    return await this.contract.resolver();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _claimingAddress {String<EthAddress>}
   * @returns BigNumber
   **/
  this.getLastFeeWithdrawal = async _claimingAddress => {
    return await this.contract.getLastFeeWithdrawal(_claimingAddress);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param period {BigNumber}
   * @returns BigNumber
   **/
  this.effectiveDebtRatioForPeriod = async (account, period) => {
    return await this.contract.effectiveDebtRatioForPeriod(account, period);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.feesAvailable = async account => {
    return await this.contract.feesAvailable(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.exchangeFeeRate = async () => {
    return await this.contract.exchangeFeeRate();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _integrationProxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setIntegrationProxy = async (_integrationProxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setIntegrationProxy(_integrationProxy, txParams);
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
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
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
   * @returns BigNumber
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.recordFeePaid = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.recordFeePaid(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _percent {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setTargetThreshold = async (_percent, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTargetThreshold(_percent, txParams);
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
   * @param account {String<EthAddress>}
   * @returns uint256[2][3]
   **/
  this.feesByPeriod = async account => {
    return await this.contract.feesByPeriod(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.closeCurrentFeePeriod = async txParams => {
    txParams = txParams || {};
    return await this.contract.closeCurrentFeePeriod(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param index {BigNumber}
   * @returns Object
   **/
  this.recentFeePeriods = async index => {
    return await this.contract.recentFeePeriods(index);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.approveClaimOnBehalf = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.approveClaimOnBehalf(account, txParams);
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
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalFeesAvailable = async () => {
    return await this.contract.totalFeesAvailable();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _exchangeFeeRate {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setExchangeFeeRate = async (_exchangeFeeRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setExchangeFeeRate(_exchangeFeeRate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.isFeesClaimable = async account => {
    return await this.contract.isFeesClaimable(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param claimingForAddress {String<EthAddress>}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimOnBehalf = async (claimingForAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.claimOnBehalf(claimingForAddress, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param exchangeRatesAddress {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.convertODRFeesTosUSD = async (exchangeRatesAddress, txParams) => {
    txParams = txParams || {};
    return await this.contract.convertODRFeesTosUSD(exchangeRatesAddress, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.removeClaimOnBehalf = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.removeClaimOnBehalf(account, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalRewardsAvailable = async () => {
    return await this.contract.totalRewardsAvailable();
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
   * @param account {String<EthAddress>}
   * @param debtRatio {BigNumber}
   * @param debtEntryIndex {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendAccountIssuanceRecord = async (account, debtRatio, debtEntryIndex, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendAccountIssuanceRecord(
      account,
      debtRatio,
      debtEntryIndex,
      txParams
    );
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
   * @param _proxy {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setProxy = async (_proxy, txParams) => {
    txParams = txParams || {};
    return await this.contract.setProxy(_proxy, txParams);
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
   * @returns String<EthAddress>
   **/
  this.integrationProxy = async () => {
    return await this.contract.integrationProxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.getPenaltyThresholdRatio = async () => {
    return await this.contract.getPenaltyThresholdRatio();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param feePeriodIndex {BigNumber}
   * @param feePeriodId {BigNumber}
   * @param startingDebtIndex {BigNumber}
   * @param startTime {BigNumber}
   * @param feesToDistribute {BigNumber}
   * @param feesClaimed {BigNumber}
   * @param rewardsToDistribute {BigNumber}
   * @param rewardsClaimed {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.importFeePeriod = async (
    feePeriodIndex,
    feePeriodId,
    startingDebtIndex,
    startTime,
    feesToDistribute,
    feesClaimed,
    rewardsToDistribute,
    rewardsClaimed,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.importFeePeriod(
      feePeriodIndex,
      feePeriodId,
      startingDebtIndex,
      startTime,
      feesToDistribute,
      feesClaimed,
      rewardsToDistribute,
      rewardsClaimed,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param quantity {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendVestingEntry = async (account, quantity, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendVestingEntry(account, quantity, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromTransfer = async value => {
    return await this.contract.amountReceivedFromTransfer(value);
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
   * @param sender {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setMessageSender = async (sender, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMessageSender(sender, txParams);
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
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.exchangeFeeIncurred = async value => {
    return await this.contract.exchangeFeeIncurred(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Number
   **/
  this.FEE_PERIOD_LENGTH = async () => {
    return await this.contract.FEE_PERIOD_LENGTH();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.claimFees = async txParams => {
    txParams = txParams || {};
    return await this.contract.claimFees(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MIN_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MIN_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.messageSender = async () => {
    return await this.contract.messageSender();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param value {BigNumber}
   * @returns BigNumber
   **/
  this.amountReceivedFromExchange = async value => {
    return await this.contract.amountReceivedFromExchange(value);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.targetThreshold = async () => {
    return await this.contract.targetThreshold();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.FEE_ADDRESS = async () => {
    return await this.contract.FEE_ADDRESS();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_FEE_PERIOD_DURATION = async () => {
    return await this.contract.MAX_FEE_PERIOD_DURATION();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.MAX_EXCHANGE_FEE_RATE = async () => {
    return await this.contract.MAX_EXCHANGE_FEE_RATE();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setRewardsToDistribute = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setRewardsToDistribute(amount, txParams);
  };
}

export default FeePool;
