import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';

/**
 * Returns true if the address has deployed bytecode.
 * EOA addresses return false.
 */
export async function isContractAddress(address: string): Promise<boolean> {
  const client = createPublicClient({ chain: base, transport: http() });
  const code = await client.getBytecode({ address: address as `0x${string}` });
  return !!code && code !== '0x';
}
