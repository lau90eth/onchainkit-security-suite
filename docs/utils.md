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
