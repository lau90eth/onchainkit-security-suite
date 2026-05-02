/**
 * Formats a gas price in wei to Gwei for display.
 */
export function formatGasPrice(gasPriceWei: bigint): string {
  const gwei = Number(gasPriceWei) / 1e9;
  if (gwei < 0.001) return '<0.001 Gwei';
  if (gwei < 1) return `${gwei.toFixed(3)} Gwei`;
  return `${gwei.toFixed(2)} Gwei`;
}
