# OnchainKit Security Suite

Security-focused hooks and components for [OnchainKit](https://github.com/coinbase/onchainkit).

Built as companion PRs to `coinbase/onchainkit` — usable today while PRs are in review.

## Hooks

| Hook | Description | PR |
|------|-------------|-----|
| `useNetworkGuard` | Detect wrong network before transaction | [#2632](https://github.com/coinbase/onchainkit/pull/2632) |
| `useTransactionHistory` | Fetch paginated transaction history | [#2633](https://github.com/coinbase/onchainkit/pull/2633) |
| `useContractVerification` | Verify contract safety before signing | [#2634](https://github.com/coinbase/onchainkit/pull/2634) |
| `useTokenAllowance` | Audit ERC-20 approvals | [#2635](https://github.com/coinbase/onchainkit/pull/2635) |
| `useRevokeAllowance` | Revoke allowances in one click | [#2635](https://github.com/coinbase/onchainkit/pull/2635) |
| `useGasEstimator` | Real-time gas estimation with spike detection | [#2638](https://github.com/coinbase/onchainkit/pull/2638) |
| `useTransactionSimulation` | Simulate transactions before signing | [#2639](https://github.com/coinbase/onchainkit/pull/2639) |
| `useWalletRisk` | Analyze destination wallet before sending | [#2640](https://github.com/coinbase/onchainkit/pull/2640) |

## Components

| Component | Description | PR |
|-----------|-------------|-----|
| `<SecurityCheck />` | Visual security summary before signing | [#2636](https://github.com/coinbase/onchainkit/pull/2636) |
| `<NetworkGuard />` | Banner for wrong network detection | [#2632](https://github.com/coinbase/onchainkit/pull/2632) |

## Quick Start

```tsx
import { SecurityCheck } from './src/components/SecurityCheck';
import { useGasEstimator } from './src/hooks/useGasEstimator';

<Transaction calls={calls}>
  <SecurityCheck />
  <TransactionButton />
</Transaction>
```

## Status

All hooks are open PRs on `coinbase/onchainkit`. 
This repo provides standalone versions usable today.

## License

MIT

## Documentation

- [Integration Guide](docs/integration-guide.md)
- [Security Guide](docs/security-guide.md)
- [Gas Spike Guide](docs/gas-spike-guide.md)
- [Allowance Security](docs/allowance-security.md)
- [Architecture](docs/architecture.md)
- [Testing](docs/testing.md)
- [FAQ](docs/faq.md)
- [Roadmap](docs/roadmap.md)
