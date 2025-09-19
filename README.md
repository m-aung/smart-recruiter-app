# Smart Recruiter App Monorepo

This repository is a simple example monorepo using Yarn workspaces and Lerna.

Getting started

1. Install dependencies (macOS / zsh):

```bash
yarn install
```

2. Bootstrap with Lerna (links local packages):

```bash
npx lerna bootstrap
```

3. Run all tests:

```bash
yarn test
```

Packages

- `packages/package-a`: exports `greet(name)`
- `packages/package-b`: depends on `package-a` and exports `greetUpper(name)`
