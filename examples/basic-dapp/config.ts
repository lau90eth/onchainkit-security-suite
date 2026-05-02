import { base } from 'viem/chains';
import { createConfig, http } from 'wagmi';
import { coinbaseWallet, metaMask } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    coinbaseWallet({ appName: 'Secure dApp' }),
    metaMask(),
  ],
  transports: {
    [base.id]: http(),
  },
});
