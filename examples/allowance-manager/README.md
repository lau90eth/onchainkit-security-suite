# Allowance Manager Example

Audit and revoke dangerous ERC-20 approvals on Base.

## What it does

- Reads all token allowances for connected wallet
- Flags infinite approvals as dangerous
- Revokes in one click via approve(spender, 0)

## Tokens monitored

- USDC on Base
- DAI on Base

## Spenders monitored

- Uniswap Router on Base
