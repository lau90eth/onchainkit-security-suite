# How to Contribute a New Hook

## 1. Identify the gap

Good hooks solve a specific security problem that:
- Affects real users on Base
- Has no existing solution in OnchainKit
- Can be solved with onchain data or public APIs

## 2. Follow the pattern

```ts
// src/hooks/useYourHook.ts
import { useState, useEffect } from 'react';
import { useOnchainKit } from '@/useOnchainKit';
import type { APIError } from '@/api/types';

export function useYourHook() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<APIError | null>(null);

  // implementation

  return { data, isLoading, error };
}
```

## 3. Write tests first

Minimum 4 tests:
- Empty/no-op state
- Success path
- Error path  
- Edge case

## 4. Open PR on OnchainKit

All hooks here are candidates for upstream.
Follow the PR format in existing contributions.
