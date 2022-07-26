# vite-react-ts-extended [![Typecheck](https://github.com/laststance/vite-react-ts-extended/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/typecheck.yml) [![Test](https://github.com/laststance/vite-react-ts-extended/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/test.yml) [![Build](https://github.com/laststance/vite-react-ts-extended/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/build.yml) [![Lint](https://github.com/laststance/vite-react-ts-extended/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/lint.yml) [![Depfu](https://badges.depfu.com/badges/6c7775918ccc8647160750e168617a65/overview.svg)](https://depfu.com/github/laststance/vite-react-ts-extended?project_id=32682)

> My CRA alternative.  
> Create plain and lightweight React+TS programming environment with familiar pre-setup tooling  
> eslint/prettier, vitest/TS/react-testing-library/msw, tailwindcss, CI.

## [Try this Online!](https://codesandbox.io/s/laststance-vite-react-ts-extended-je09qc?file=/src/App.tsx)

<img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/ext.png" />

This is the official [Vite](https://vitejs.dev/) [react-ts](https://stackblitz.com/edit/vitejs-vite-is3dmk?file=index.html&terminal=dev) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.

- [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/) integration. Rules are 100% my personal setup 💅
- [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)


# Installation

```
npx degit guitartsword/vitest-react-ts-extended myapp
```

### pnpm

```sh
cd myapp
pnpm install
pnpm validate # The installation was successful if no error occurs after running 'validate'.
pnpm dev
```

### npm

```sh
cd myapp
npm install
npm run validate # The installation was successful if no error occurs after running 'validate'.
npm run dev
```

### Commands

```sh
pnpm dev            # start development server
pnpm validate       # run test,lint,build,typecheck concurrently
pnpm test           # run vitest without watch mode
pnpm test:ui        # run tests with ui (Really awesome)
pnpm test:watch     # run vitest in watch mode
pnpm lint           # run eslint
pnpm lint:fix       # run eslint with --fix option
pnpm typecheck      # run TypeScript compiler check
pnpm build          # build production bundle to 'dist' directly
pnpm prettier       # run prettier for json|yml|css|md|mdx files
pnpm clean          # remove 'node_modules' 'pnpm-lock.yaml' 'dist' completely
pnpm serve          # launch server for production bundle in local
```


# Background

The evolution of the React framework is accelerating more than ever before.  
[Next.js](https://nextjs.org/), [Remix](https://remix.run/), [RedwoodJS](https://redwoodjs.com/), [Gatsby](https://www.gatsbyjs.com/), [Blitz](https://blitzjs.com/) etc...

Ahthough I still need plain React programming starter some reason. (.e.g Demo, Experiment like Deep Dive React Core.)  
So far, [create-react-app](https://github.com/facebook/create-react-app) **was** it.  
In short, [create-react-app](https://github.com/facebook/create-react-app) development couldn't say active. Please read the [Issue](https://github.com/facebook/create-react-app/issues/11180) in details.

So I created an alternative to [create-react-app](https://github.com/facebook/create-react-app) for myself, based on [Vite](https://github.com/facebook/create-react-app).  
This project contains my very opinionted setup,  
but I hope it will be a useful tool for people who have similar needs to mine! 😀

# License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/vite-react-ts-extended/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/vite-react-ts-extended/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/vite-react-ts-extended/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://hung.dev"><img src="https://avatars.githubusercontent.com/u/8603085?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hung Viet Nguyen</b></sub></a><br /><a href="https://github.com/laststance/vite-react-ts-extended/commits?author=nvh95" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/guitartsword"><img src="https://avatars.githubusercontent.com/u/12071733?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Isaias Valle</b></sub></a><br /><a href="https://github.com/guitartsword/vitest-react-ts-extended/commits?author=guitartsword" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
