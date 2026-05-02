# Secure Swap Example

A swap interface with full security coverage before signing.

## Security checks

1. Contract verification — is Uniswap Router verified?
2. Allowance audit — do you have dangerous approvals?
3. Gas estimation — are you overpaying?
4. SecurityCheck component — visual summary

## Key pattern

Transaction button is disabled if contract risk is high.
Users cannot accidentally sign dangerous transactions.
