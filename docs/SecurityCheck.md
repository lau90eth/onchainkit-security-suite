# SecurityCheck

Visual security summary component that analyzes contracts before the user signs.

## Usage

```tsx
import { SecurityCheck } from '../src/components/SecurityCheck';

<Transaction calls={calls}>
  <SecurityCheck />
  <TransactionButton />
</Transaction>
```

Shows:
- ✅ Contract verified
- ⚠️ Proxy contract (with implementation address)
- 🔴 Contract not verified

## PR

[coinbase/onchainkit#2636](https://github.com/coinbase/onchainkit/pull/2636)
