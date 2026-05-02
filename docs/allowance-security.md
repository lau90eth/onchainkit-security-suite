# Token Allowance Security

## Why infinite approvals are dangerous

When you approve a DEX or protocol to spend your tokens, you often
grant an infinite allowance (`MaxUint256`). This means:

- The protocol can spend ALL your tokens at any time
- If the protocol is hacked, attackers can drain your wallet
- The approval persists forever unless explicitly revoked

## How to audit

```tsx
const { allowances } = useTokenAllowance({
  tokens: [USDC, WETH, DAI],
  spenders: [UNISWAP, AAVE, ANY_CONTRACT],
});

const risky = allowances.filter(a => a.isInfinite);
```

## How to revoke

```tsx
const { revoke } = useRevokeAllowance();

// Revoke infinite USDC approval to Uniswap
await revoke({ token: USDC, spender: UNISWAP });
```

This calls `approve(spender, 0)` — the ERC-20 standard for revocation.

## Best practices

1. Never grant infinite approvals to unverified contracts
2. Audit approvals monthly
3. Use exact amounts instead of infinite when possible
4. Revoke approvals to protocols you no longer use
