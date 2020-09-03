## How to setup project:

### `yarn server`

Runs the app in the production mode along with the express mock API server.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn start`

Runs the app in the development mode, but without the express server.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

DISCLAIMER:

1. Run `yarn build` after adding your changes to add them to production build.
2. You'll need to run `yarn server` to run the express server with the latest build configurations.

### `yarn build`

Builds the app for production to the `build` folder, which is used by the express server<br />

## `Project notes:`

### `Task 1`

To style this app, I used [Bootstrap 4](https://getbootstrap.com), [Css modules](https://github.com/css-modules/css-modules), and [SASS css preprocessor](https://sass-lang.com/).

Justification:

- Most of the paddings, margins and font sizes in this app doesn't match the toolkit provided by Bootstrap and I thought using it might get counter-intuitive somehow.
- I used Css modules for the seek of separation of concerns and to avoid global classes overriding each other with unique classnames.
- I used Sass preprocessor for purposes of readability via nesting. 

### `Task 2`

I used a local express server to mock the API request and response needed. I believe it's the most naturally-felt way to do it. I prefer it over other methods like [Mirag JS](https://miragejs.com/).



