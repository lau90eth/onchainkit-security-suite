# Integration Guide

## Step 1 — Install dependencies

```bash
npm install @coinbase/onchainkit viem wagmi @tanstack/react-query
```

## Step 2 — Setup providers

```tsx
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'viem/chains';

function Root() {
  return (
    <OnchainKitProvider chain={base} apiKey={process.env.API_KEY}>
      <App />
    </OnchainKitProvider>
  );
}
```

## Step 3 — Add SecurityCheck to your Transaction

```tsx
import { Transaction, TransactionButton } from '@coinbase/onchainkit/transaction';
import { SecurityCheck } from 'onchainkit-security-suite';

function MyTransaction() {
  return (
    <Transaction calls={calls}>
      <SecurityCheck />
      <TransactionButton />
    </Transaction>
  );
}
```

## Step 4 — Add gas estimation

```tsx
import { useGasEstimator } from 'onchainkit-security-suite';

const { estimatedFee, isSpike } = useGasEstimator();
```

## Step 5 — Audit approvals

```tsx
import { useTokenAllowance, useRevokeAllowance } from 'onchainkit-security-suite';

const { allowances } = useTokenAllowance({ tokens, spenders });
const { revoke } = useRevokeAllowance();
```
