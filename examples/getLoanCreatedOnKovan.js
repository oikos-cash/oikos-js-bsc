'use strict';

const { OikosJs } = require('../dist/main.node.js');

const { getDefaultProvider, Wallet } = require('ethers');
const wallet = Wallet.createRandom();
const oksjs = new OikosJs({
  signer: new OikosJs.signers.PrivateKey(getDefaultProvider('kovan'), 42, wallet.privateKey),
  networkId: 42, // kovan
});

(async function() {
  const testUser = '0x3787d321e3ece1e4ca7d7449d49a4fb5f85dc447';
  const { contract } = oksjs.EtherCollateral;
  const filter = Object.assign(
    { fromBlock: 0, toBlock: 9e9 },
    contract.filters.LoanCreated(testUser)
  );
  const events = await oksjs.contractSettings.provider.getLogs(filter);
  const parsedEventData = events.map(log => contract.interface.parseLog(log));
  console.log(JSON.stringify(parsedEventData, null, '\t'));
})();
