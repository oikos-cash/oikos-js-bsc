import { providers } from 'ethers';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const CoinbaseSigner = ({ appName, appLogoUrl, jsonRpcUrl, networkId = 1 }) => {
  const coinbaseWallet = new CoinbaseWalletSDK({
    appName,
    appLogoUrl,
    darkMode: false,
  });

  const eth = coinbaseWallet.makeWeb3Provider(jsonRpcUrl, networkId);
  const provider = new providers.Web3Provider(eth);
  const signer = provider.getSigner();
  signer.getNextAddresses = () => new Promise(resolve => resolve(eth.enable()));
  return signer;
};

export default CoinbaseSigner;
