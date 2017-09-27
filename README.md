# React-Router/Bulma Boilerplate
A boilerplate React web app created with react-create-app, with:

1. Bulma CSS in `/public` and  in `/node_modules`
2. React Router-DOM set up, with `<Router>` in App.js
3. FontAwesome CSS and Fonts in `/public`

### Installation

1. `git clone git@github.com:njwest/React-Router-Bulma-Boilerplate.git myapp && cd myapp`

2. `yarn install`

3. `yarn start`

#### Note about Bulma

If you want to use Bulma as a node package/Bulma SASS/etc, delete the Bulma.css `<link />` from the head of `public/index.html` prior to initializing the package/setting up SASS.

#### Note about Yarn vs NPM

Since this app was created using react-create-app, use `yarn` commands (`yarn add`, `yarn start`, etc) instead of `npm` commands, as NPM will get confused and delete your yarn-installed packages whenever you `npm i` (quickly remedied by doing an `npm i`, but still annoying).
