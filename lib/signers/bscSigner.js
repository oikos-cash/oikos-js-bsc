import { providers } from 'ethers';

const BSCSigner = () => {
  const { BinanceChain } = window;
  const provider = new providers.Web3Provider(BinanceChain);
  const signer = provider.getSigner();
  signer.getNextAddresses = () =>
    new Promise(resolve =>
      resolve(BinanceChain.send('eth_requestAccounts').then(accounts => accounts.result))
    );
  return signer;
};

export default BSCSigner;
