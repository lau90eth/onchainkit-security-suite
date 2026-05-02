/**
 * Estimates wait time in minutes for gas to normalize after a spike.
 * Based on historical Base gas volatility patterns.
 */
export function estimateWaitTime(
  currentGas: bigint,
  medianGas: bigint,
): number {
  if (medianGas === 0n) return 0;

  const ratio = Number(currentGas) / Number(medianGas);

  if (ratio < 1.2) return 0;   // already safe
  if (ratio < 1.5) return 1;   // minor spike
  if (ratio < 2.0) return 2;   // moderate spike
  if (ratio < 3.0) return 3;   // significant spike
  if (ratio < 5.0) return 5;   // major spike
  return 10;                    // extreme spike
}
