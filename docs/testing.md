# Testing

## Run tests

```bash
# In coinbase/onchainkit fork
cd ~/onchainkit/packages/onchainkit
pnpm test -- src/transaction/hooks/useGasEstimator.test.ts
pnpm test -- src/transaction/hooks/useContractVerification.test.ts
pnpm test -- src/transaction/components/SecurityCheck.test.tsx
```

## Test coverage per hook

| Hook | Tests | Coverage |
|------|-------|----------|
| useNetworkGuard | 6 | empty, correct chain, wrong chain, switch, no-op, isSwitching |
| useTransactionHistory | 5 | empty, fetch, address override, error, custom limit |
| useContractVerification | 5 | empty, verified, unverified, proxy, error |
| useTokenAllowance | 4 | empty, normal, infinite, error |
| useRevokeAllowance | 2 | revoke call, isRevoking state |
| useGasEstimator | 4 | empty, normal, spike, error |
| SecurityCheck | 5 | loading, verified, unverified, proxy, empty |

## Mocking pattern

All hooks mock external dependencies via vitest:

```ts
vi.mock('../utils/estimateGas', () => ({
  estimateGasFee: vi.fn(),
}));
```
