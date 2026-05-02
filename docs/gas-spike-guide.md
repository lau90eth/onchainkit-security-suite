# Gas Spike Detection Guide

## How spike detection works

`useGasEstimator` maintains a 20-block median history per chain.

- **`isSafe`**: current gas < 1.2x median
- **`isSpike`**: current gas > 2x median
- **`waitTimeMinutes`**: estimated time until gas normalizes

## Recommended UX patterns

### Pattern 1 — Soft warning
```tsx
{isSpike && (
  <p>⚠️ Gas is elevated. Estimated wait: {waitTimeMinutes} min</p>
)}
```

### Pattern 2 — Hard block
```tsx
<TransactionButton disabled={isSpike} />
```

### Pattern 3 — Fee cap
```tsx
const { isSafe } = useGasEstimator({ maxAcceptableFee: '0.005' });
// isSafe = false if fee > 0.005 ETH regardless of spike
```

## Base gas characteristics

Base has very low gas fees in normal conditions.
Spikes are typically short (2-5 min) and caused by:
- NFT mint events
- Token launches
- High-volume periods
