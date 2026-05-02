# useTransactionHistory

Fetches paginated onchain transaction history for a connected wallet.

## Usage

```tsx
import { useTransactionHistory } from '../src/hooks/useTransactionHistory';

const { transactions, isLoading, hasMore, loadMore } = useTransactionHistory({
  limit: 20,
});

return (
  <div>
    {transactions.map(tx => (
      <div key={tx.hash}>
        {tx.functionName} — {tx.status}
      </div>
    ))}
    {hasMore && <button onClick={loadMore}>Load more</button>}
  </div>
);
```

## API

| Property | Type | Description |
|----------|------|-------------|
| `transactions` | `TransactionHistoryItem[]` | List of transactions |
| `isLoading` | `boolean` | Loading state |
| `hasMore` | `boolean` | More pages available |
| `loadMore` | `() => void` | Load next page |
| `error` | `APIError \| null` | Error state |

## PR

[coinbase/onchainkit#2633](https://github.com/coinbase/onchainkit/pull/2633)
