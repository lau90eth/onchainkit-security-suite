# useTokenAllowance & useRevokeAllowance

Audit and revoke ERC-20 token approvals.

## Usage

```tsx
import { useTokenAllowance, useRevokeAllowance } from '../src/hooks/useTokenAllowance';

const { allowances, isLoading } = useTokenAllowance({
  tokens: [USDC_ADDRESS, DAI_ADDRESS],
  spenders: [UNISWAP_ROUTER],
});

const { revoke, isRevoking } = useRevokeAllowance();

return (
  <div>
    {allowances
      .filter(a => a.isInfinite)
      .map(a => (
        <div key={`${a.token}-${a.spender}`}>
          ⚠️ Infinite approval
          <button onClick={() => revoke({ token: a.token, spender: a.spender })}>
            Revoke
          </button>
        </div>
      ))}
  </div>
);
```

## PR

[coinbase/onchainkit#2635](https://github.com/coinbase/onchainkit/pull/2635)
