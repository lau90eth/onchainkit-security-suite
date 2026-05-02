/**
 * Formats a fee in ETH to a human-readable string.
 * Examples:
 *   0.000012 ETH → "0.000012 ETH (~$0.03)"
 *   0.05 ETH     → "0.05 ETH (~$125.00)"
 */
export function formatFee(
  feeEth: string,
  ethPriceUsd?: number,
): string {
  const fee = parseFloat(feeEth);
  if (Number.isNaN(fee)) return '—';

  const ethStr = fee < 0.0001
    ? fee.toExponential(2)
    : fee.toFixed(6).replace(/\.?0+$/, '');

  if (!ethPriceUsd) return `${ethStr} ETH`;

  const usd = (fee * ethPriceUsd).toFixed(2);
  return `${ethStr} ETH (~$${usd})`;
}
