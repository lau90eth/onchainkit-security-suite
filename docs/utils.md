# Utilities

## formatFee

Formats a fee in ETH to a human-readable string.

```ts
import { formatFee } from '../src/utils/formatFee';

formatFee('0.000012')           // "0.000012 ETH"
formatFee('0.000012', 2500)     // "0.000012 ETH (~$0.03)"
```

## shortenAddress

Shortens an Ethereum address for display.

```ts
import { shortenAddress } from '../src/utils/shortenAddress';

shortenAddress('0x1234567890abcdef1234567890abcdef12345678')
// "0x1234...5678"

shortenAddress('0x1234567890abcdef1234567890abcdef12345678', 6)
// "0x123456...345678"
```

## isInfiniteApproval

Returns true if an allowance is effectively infinite.

```ts
import { isInfiniteApproval } from '../src/utils/isInfiniteApproval';

isInfiniteApproval(MaxUint256)  // true
isInfiniteApproval(1000n)       // false
```

## getRiskColor

Returns Tailwind color classes for a risk level.

```ts
import { getRiskColor } from '../src/utils/getRiskColor';

const { bg, text, border } = getRiskColor('high');
// bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200'
```

## getRiskLabel

Returns human-readable label and emoji for a risk level.

```ts
import { getRiskLabel } from '../src/utils/getRiskLabel';

const { emoji, label, description } = getRiskLabel('high');
// emoji: '🔴', label: 'High Risk', description: '...'
```
