/**
 * EIP-1967 proxy slot detection.
 * Reads the implementation address from standard proxy storage slots.
 */
export const EIP1967_IMPLEMENTATION_SLOT =
  '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc';

export const EIP1967_BEACON_SLOT =
  '0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50';

export const OPENZEPPELIN_IMPLEMENTATION_SLOT =
  '0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3';

export function isLikelyProxy(bytecode: string): boolean {
  if (!bytecode || bytecode === '0x') return false;
  // delegatecall opcode (0xf4) in bytecode is a proxy indicator
  return bytecode.includes('f4');
}
