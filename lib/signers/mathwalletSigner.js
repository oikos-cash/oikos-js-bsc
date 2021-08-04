import { providers } from 'ethers';

const MathwalletSigner = () => {
  const { ethereum } = window;
  const provider = new providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  console.log(ethereum);
  signer.address = ethereum.selectedAddress || ethereum.address;
  console.log(signer);

  return signer;
};

export default MathwalletSigner;
