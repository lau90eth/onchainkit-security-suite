/**
 * Shortens an Ethereum address for display.
 * Example: 0x1234567890abcdef → 0x1234...cdef
 */
export function shortenAddress(address: string, chars = 4): string {
  if (!address) return '';
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}
