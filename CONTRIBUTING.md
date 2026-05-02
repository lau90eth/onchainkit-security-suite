# Contributing

## Setup

```bash
git clone https://github.com/lau90eth/onchainkit-security-suite
cd onchainkit-security-suite
npm install
```

## Structure
src/hooks/       — React hooks
src/components/  — React components
src/utils/       — Utility functions
docs/            — Documentation
examples/        — Usage examples

## Adding a hook

1. Create `src/hooks/useYourHook.ts`
2. Add docs in `docs/useYourHook.md`
3. Add example in `examples/`
4. Update README.md table
5. Update CHANGELOG.md

## Submitting to OnchainKit

All hooks in this repo are candidates for upstream PRs to
`coinbase/onchainkit`. See open PRs for examples.
