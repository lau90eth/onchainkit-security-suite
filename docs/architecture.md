# Architecture

## Design principles

1. **Read-only by default** — hooks that read onchain data have zero 
   side effects. Only `useRevokeAllowance` writes to chain.

2. **Graceful degradation** — every hook returns a safe default state 
   when data is unavailable. Nothing crashes.

3. **OnchainKit compatible** — all hooks follow OnchainKit patterns:
   - `APIError` for errors
   - `useTransactionContext` for transaction data
   - `useOnchainKit` for chain config

4. **Zero trust** — no external services required except Basescan 
   for contract verification (optional, degrades gracefully).

## Data flow
OnchainKitProvider
└── TransactionProvider (calls, chainId)
├── useGasEstimator → viem getGasPrice
├── SecurityCheck → useContractVerification → Basescan API
├── useNetworkGuard → wagmi useAccount
└── useTokenAllowance → viem readContract (erc20Abi)

## Error handling

All hooks use `APIError` from `@coinbase/onchainkit`:

```ts
type APIError = {
  code: string;
  error: string;
  message: string;
};
```

Errors are exposed as `error` state — never thrown.
