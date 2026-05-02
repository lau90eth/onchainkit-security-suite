import { MaxUint256 } from 'viem';

/**
 * Returns true if the allowance amount is effectively infinite.
 * Infinite = MaxUint256 or within 1% of MaxUint256.
 */
export function isInfiniteApproval(amount: bigint): boolean {
  if (amount === MaxUint256) return true;
  // Within 1% of MaxUint256 is also considered infinite
  const threshold = MaxUint256 / 100n;
  return amount > MaxUint256 - threshold;
}
