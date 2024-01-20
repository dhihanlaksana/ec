# mosa-web

## Description


## Required Technology
- vue : >= 3.3.4
- typescript : >= 5.2.0

## Library / Dependency
- [primevue](https://primevue.org/installation) : Opensource UI Component  for vue
- [vue use](https://vueuse.org/guide/) : collection of utility functions based on Composition API
- [pinia](https://pinia.vuejs.org/introduction.html) : Vue state management
- [vee-validate](https://vee-validate.logaretm.com/v4/guide/overview/) and [yup](https://github.com/jquense/yup) for input validation
- [vue i18n](https://vue-i18n.intlify.dev/guide/introduction.html) for localization
- [vue-route](https://router.vuejs.org/installation.html) for handle route page 
- [tailwind](https://tailwindcss.com) for css framework

## Architecture


## Convention

### Code Convention
- use ```kebab case``` for file and folder
- [vue style guide](https://vuejs.org/style-guide/)

### Pull Request & Commit
- Pull Request : 
 
  Format : `[NO_TICKET] : PULL_REQUEST_DESCRIPTION`
  
  Example : `[T0001] : handle login with username and password`

  If task is in progress, optional can add `WIP` in title, example :
  `[WIP][T0001] : handle login with username and password`

- Pull Request Label :

  - *WIP* : Work In Progress, indicate task in working progress
  - *need unit test* : Indicate main feature task is done, but need unit test
  - *ready to review* : Indicate that pull request is ready to review

- Commit : 

  Format : `[CATEGORY][NO_TICKET] : description of work`

  Example : 
    - `[FEATURE][T0001] : create api client service`
    - `[BUGFIX][T0001] : fix wording username validation message`
    - `[HOTFIX][T0001] : fix crash when login with google`

  Available Category :
    - *FEATURE* : indicate your commit is working on new feature
    - *BUGFIX* : indicate your commit is fixing bug
    - *HOTFIX* : indicate your commit is fixing critical bug and must be fix immediately without creating system downtimes or outages.

## Project Structure
```
|-- coverage/
|-- public/
|   |-- favicon.ico
|-- src/
|   |-- assets/
|   |-- components/
|   |-- composables/
|   |-- layouts/
|   |-- locales/
|   |-- middleware/
|   |-- modules/
|   |-- pages/
|   |-- stores/
|   |-- App.vue
|   |-- i18n.ts
|   |-- main.ts
|   |-- router.ts
|-- tests/
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- tailwind.config.js
|-- tsconfig.json
|-- vite.config.ts
|-- vitest.config.ts
```

### Folder Overview
- coverage : Generated folder when running test with coverage mode
- public : Contains the public assets
- src : The main source code of project
    - assets : Contains static assets like images
    - components : Reusable Vue components
    - composables : Contains all file that encapsulate and reuse stateful logic
    - layouts : Contains app layouts like default, public or protected layout
    - locales : Contains localization message configuration base on language code
    - middleware : Contains all route middleware
    - modules : Contain all BE integration file, separate module by domain
    - pages : Contain all page that show to user and map one-on-one with router
    - stores : Contains all local state management file
- tests : The main source of unit test code, map one-on-one with src folder

### File Overview
- src/App.vue : The root Vue component that serves as the entry point for your application.
- src/i18n.ts : I18n configuration and create instance
- src/main.ts : The main Typescript file where you create the Vue instance and configure the app
- src/router.ts : Main route configuration
- index.html : The main HTML file where your Vue app is mounted
- tailwind.config.js : Main tailwind configuration for detail visit on [official documentation](https://tailwindcss.com/docs/configuration)
- tsconfig.json : Main typescript configuration for detail visit on [official documentation](https://www.typescriptlang.org/tsconfig)
- vite.json : Main vite configuration for detail visit on [official documentation](https://vitejs.dev/config/)
- vitest.json : Main vitest configuration for detail visit on [official documentation](https://vitest.dev/config/)


## Getting Started 🚀
- install all dependency
```
npm run install
```

- running dev mode 
```
npm run dev
```

- build production
```
npm run build
```

- preview mode base on build source, need build first before run this command
```
npm run preview
```

## Running Test 🧪
- running test
```
npm run test:unit
```

- running test with coverage
```
npm run test:coverage
```