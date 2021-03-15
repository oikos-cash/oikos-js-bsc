const snxData = require('@oikos/oikos-data'); 
const {ethers, getDefaultProvider} = require("ethers");

const web3 = require('web3');

const asset = require('./Issuer.json');
const { OikosJs } = require('../dist/main.node.js');

const BN = require('bignumber.js');

const network = 'bsc';
const networkId = 97;
const provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');

const signer = new OikosJs.signers.PrivateKey(
  provider,
  network,
  process.env.PRIVATE_KEY
);

const snx = new OikosJs({ networkId, signer });

const getDebtSnapshot = async () => {
    return await snxData.snx.debtSnapshot({max:100000});
}

(async function() {

    const debtSnapshot = await getDebtSnapshot();
    const seen = [];
     
    let totalDebt = 0;
    let accounts = [];
    let balances = [];

    debtSnapshot.map((debtor, idx) => {
         
 
        if (Number(debtor.debtBalanceOf > 0.0001)  && !seen.includes(debtor.account)) {
            accounts.push(debtor.account);
            console.log(BN(debtor.debtBalanceOf).toString())
            balances.push(web3.utils.toWei(BN(debtor.debtBalanceOf).toString()));
            totalDebt = totalDebt + debtor.debtBalanceOf;
            seen.push(debtor.account);
             
        }
    });

    console.log(`Found a total of ${accounts.length} debtors for a total of oUSD ${totalDebt}`)

    const Issuer = new ethers.Contract(
        '0x9eF94CB3B3be97463f52caaB23de9848dBD43b44',
        asset.abi,
        signer
    );

    if (accounts.length != balances.length) {
        console.log("fatal error");
        return
    }

    accounts = [];
    balances = [];

    accounts[0] = "0x768d28a0fa6935b9cd65ce04be83b15d51f711b4";
    balances[0] = web3.utils.toWei(BN(4.188).toString());

    const result = await Issuer.importIssuerData(accounts, balances, { gasLimit: 8000000});
    console.log(result);

})();



