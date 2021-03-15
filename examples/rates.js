import { OikosJs } from '../src/index.node';
import {getDefaultProvider} from 'ethers';

const run = async () => {
    const provider = getDefaultProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
    const networkId = 97;
    const snx = new OikosJs({ networkId, provider });

  const b32 = snx.ethers.utils.formatBytes32String;

  const { parseBytes32String, formatEther } = snx.ethers.utils;

  const currKeys = [b32('OKS'), ...(await snx.Oikos.availableCurrencyKeys())];

  console.log(snx.ExchangeRates);
  
  // TODO: XDR handled specially...
  const rates = await Promise.all(currKeys.map(k => snx.ExchangeRates.rateForCurrency(k)));
  const times = await Promise.all(currKeys.map(k => snx.ExchangeRates.lastRateUpdateTimes(k)));

  let rateStalePeriod = await snx.ExchangeRates.rateStalePeriod();
  rateStalePeriod = parseInt(rateStalePeriod.toString(), 10);

  const now = Date.now() / 1000;
  currKeys.forEach((currKey, idx) => {
    let rate = rates[idx];
    rate = formatEther(rate);
    let time = times[idx];
    time = parseInt(time.toString(), 10);
    const delta = now - time;
    const hours = (delta / (60 * 60)).toFixed(2);
    const isStale = delta > rateStalePeriod;
    const currCode = parseBytes32String(currKey);
    console.log(
      `${currCode} = ${rate}$, updated ${hours} hours ago ${
        isStale ? (currCode === 'oUSD' ? '(oUSD is never stale)' : 'IS STALE') : ''
      }`
    );
  });
};

const start = async () => {
  try {
    await run();
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};
start();