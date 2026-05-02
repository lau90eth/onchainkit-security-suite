# useContractVerification

Analyzes a contract address and returns security signals before the user signs.

## Usage

```tsx
import { useContractVerification } from '../src/hooks/useContractVerification';

const { isVerified, isProxy, risk, warnings } = useContractVerification({
  address: contractAddress,
});

return (
  <div>
    {risk === 'high' && warnings.map(w => <p key={w}>⚠️ {w}</p>)}
    {isVerified && <p>✅ Contract verified</p>}
    {isProxy && <p>⚠️ Proxy contract</p>}
  </div>
);
```

## API

| Property | Type | Description |
|----------|------|-------------|
| `isVerified` | `boolean` | Source code verified on Basescan |
| `isProxy` | `boolean` | Contract is a proxy |
| `proxyTarget` | `Address \| null` | Implementation address |
| `risk` | `'low' \| 'medium' \| 'high'` | Risk level |
| `warnings` | `string[]` | Human-readable risk signals |

## PR

[coinbase/onchainkit#2634](https://github.com/coinbase/onchainkit/pull/2634)
