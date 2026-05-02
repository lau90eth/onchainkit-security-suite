# Security Guide for Base dApps

A practical checklist for securing any dApp built with OnchainKit.

## Before every transaction

### 1. Verify the contract
```tsx
const { isVerified, risk } = useContractVerification({ address });
if (risk === 'high') {
  // Block or warn the user
}
```

### 2. Check the network
```tsx
const { isWrongNetwork } = useNetworkGuard();
if (isWrongNetwork) {
  // Show switch prompt
}
```

### 3. Estimate gas
```tsx
const { isSpike, waitTimeMinutes } = useGasEstimator();
if (isSpike) {
  // Suggest waiting
}
```

## Periodic checks

### 4. Audit token approvals
```tsx
const { allowances } = useTokenAllowance({ tokens, spenders });
const dangerous = allowances.filter(a => a.isInfinite);
// Show revoke UI for dangerous approvals
```

## The full stack

```tsx
<Transaction calls={calls}>
  <SecurityCheck />      // contract verification
  <TransactionButton />  // disabled if high risk
</Transaction>
```

## Risk levels

| Level | Meaning | Action |
|-------|---------|--------|
| `low` | Verified, no proxy | Safe to proceed |
| `medium` | Recently deployed | Warn user |
| `high` | Unverified | Block or strong warning |
