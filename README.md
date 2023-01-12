# Dept app

This is the best effort made by wadi zaatour for dept frontend challenge. I have learned a lot during working on solving it and looking forward to discuss further regarding the decisions that I have made.
![dept app 1](https://user-images.githubusercontent.com/25867217/212007095-ffec24c8-2e7d-4f8a-a282-21bae1d87136.png)
![dpet app 2](https://user-images.githubusercontent.com/25867217/212007109-4752aa04-7a59-418c-a490-5e8e8cd02cdf.png)

## :hammer: Configured development tools:

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Msw](https://https://mswjs.io/)

## Unit tests tools

- [Jest](https://jestjs.io/)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
## Versions
 Vue 3.2.45
 Node v19.3.0
 Npm v9.2.0
 Vite v4.0.0

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## :rocket: How to get started ?

### :one: Clone the repository

**HTTPS**

git clone https://github.com/wadizaatour/Dept-App


**SSH**

git clone https://github.com/wadizaatour/Dept-App


### :two: Install dependencies

**NPM**

npm install

or only:

npm i

- **Perfect!** :white_check_mark: If you followed the previous steps correctly, the application will be running by default on: [http://localhost:5173/](http://localhost:5173/)

### :three: Compile and minify for production

**NPM**
you can check that the files are using gzip while they are being built with vite. helps a lot for the seo and optimization
npm run build
### :four: run unit test

**NPM**
 npm run test

**ps**
 The application was tested mostly on google Chrome.
 I did my best to get one example for each item mentioned in the requirements to keep things simple.
 I have followed the approach make it work make it pretty.
 I was able to add the PWA to the application! however the service worker used by MSW cannot handle requests while you have a the worker running for the PWA.
 There is no workarround since I am mocking the data. In real buisness case it can be easily integrate it.
 For the performance! lighthouse report gives a lower score since the text is not compressed through a server. This can only be improved by hosting the application 


