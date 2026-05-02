/**
 * Parses a revert reason from a transaction error.
 * Handles: custom errors, string reverts, panic codes.
 */
export function parseRevertReason(error: unknown): string {
  if (!error) return 'Unknown error';

  const msg = (error as Error).message ?? String(error);

  // Extract revert reason from viem error message
  const revertMatch = msg.match(/reverted with reason string '(.+?)'/);
  if (revertMatch) return revertMatch[1];

  // Custom error
  const customMatch = msg.match(/reverted with custom error '(.+?)'/);
  if (customMatch) return customMatch[1];

  // User rejected
  if (msg.includes('User rejected') || msg.includes('user rejected')) {
    return 'Transaction rejected by user';
  }

  // Insufficient funds
  if (msg.includes('insufficient funds')) {
    return 'Insufficient funds for gas';
  }

  return msg.slice(0, 100);
}
