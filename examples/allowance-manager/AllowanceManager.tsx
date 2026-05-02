import { useTokenAllowance, useRevokeAllowance } from '../../src/hooks/useTokenAllowance';

const USDC = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
const DAI  = '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb';
const UNISWAP_ROUTER = '0x2626664c2603336E57B271c5C0b26F421741e481';

export function AllowanceManager() {
  const { allowances, isLoading } = useTokenAllowance({
    tokens: [USDC, DAI],
    spenders: [UNISWAP_ROUTER],
  });

  const { revoke, isRevoking } = useRevokeAllowance();

  if (isLoading) return <p>Loading allowances...</p>;

  const dangerous = allowances.filter(a => a.isInfinite);

  if (dangerous.length === 0) {
    return <p>✅ No dangerous approvals found</p>;
  }

  return (
    <div>
      <h2>⚠️ Infinite Approvals Detected</h2>
      {dangerous.map(a => (
        <div key={`${a.token}-${a.spender}`}>
          <p>Token: {a.token}</p>
          <p>Spender: {a.spender}</p>
          <button
            onClick={() => revoke({ token: a.token, spender: a.spender })}
            disabled={isRevoking}
          >
            {isRevoking ? 'Revoking...' : 'Revoke'}
          </button>
        </div>
      ))}
    </div>
  );
}
