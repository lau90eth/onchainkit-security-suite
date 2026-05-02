import { base, baseSepolia } from 'viem/chains';

export const SUPPORTED_CHAINS = [base, baseSepolia];

export const CHAIN_NAMES: Record<number, string> = {
  [base.id]:        'Base',
  [baseSepolia.id]: 'Base Sepolia',
};

export function isSupported(chainId: number): boolean {
  return SUPPORTED_CHAINS.some(c => c.id === chainId);
}
