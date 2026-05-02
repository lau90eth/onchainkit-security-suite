# useGasEstimator

Real-time gas estimation with spike detection for Base transactions.

## Usage

```tsx
import { useGasEstimator } from '../src/hooks/useGasEstimator';

const { estimatedFee, isSpike, isSafe, waitTimeMinutes } = useGasEstimator({
  maxAcceptableFee: '0.01',
});

return (
  <div>
    {isSpike && <p>🔴 Gas spike — wait {waitTimeMinutes} min</p>}
    {isSafe && <p>✅ Fee: {estimatedFee} ETH</p>}
  </div>
);
```

## API

| Property | Type | Description |
|----------|------|-------------|
| `estimatedFee` | `string` | Estimated fee in ETH |
| `maxFee` | `string` | Worst case fee (150% buffer) |
| `isSpike` | `boolean` | Gas > 2x median |
| `isSafe` | `boolean` | Gas < 1.2x median |
| `waitTimeMinutes` | `number \| undefined` | Estimated wait for safe window |

## PR

[coinbase/onchainkit#2638](https://github.com/coinbase/onchainkit/pull/2638)
