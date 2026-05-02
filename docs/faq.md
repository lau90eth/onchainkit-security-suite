# FAQ

## Do these hooks work without OnchainKit?

Partially. `useContractVerification`, `useGasEstimator`, and 
`useTokenAllowance` require wagmi and viem but not OnchainKit directly.
`SecurityCheck` and `useNetworkGuard` require `OnchainKitProvider`.

## Are these production-ready?

These hooks are open PRs on `coinbase/onchainkit`. 
Use in production at your own risk until they are merged and audited.

## Which chains are supported?

All hooks work on any EVM chain configured in `OnchainKitProvider`.
`useContractVerification` uses Basescan API — works best on Base mainnet.
`useGasEstimator` reads directly from chain — works on any EVM chain.

## How does spike detection work?

`useGasEstimator` maintains a 20-block in-memory gas price history.
Spike = current price > 2x the median of the last 20 blocks.
Safe = current price < 1.2x the median.

## Can I use these without a Basescan API key?

Yes. Basescan allows unauthenticated read calls with a lower rate limit.
For production use with high traffic, pass your API key via 
`OnchainKitProvider`.

## Will these be merged into OnchainKit?

The goal is yes. All hooks follow OnchainKit patterns and conventions.
Follow the linked PRs for review status.
