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

- `packages/client`: Create React App (TypeScript) client. Run locally with `yarn start` inside the `packages/client` folder.

Client commands:

```bash
cd packages/client
yarn start
```
