# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Unit testing

testing-library/react is used for unit testing. See https://testing-library.com/ for more information.

## Queries

Testing Library has created their guiding principles. See https://testing-library.com/docs/guiding-principles for more information.

This is the order of preference for quering:

- getByRole
- getByLabelText
- getByPlaceholderText
- getByText
- getByDisplayValue
- getByAltText
- getByTitle
- getByTestId

Note adding `data-testid` for quering is the least preferred.

"In the spirit of the guiding principles, it is recommended to use this only after the other queries don't work for your use case. Using `data-testid` attributes do not resemble how your software is used and should be avoided if possible."

Source: https://testing-library.com/docs/queries/bytestid/

## Web Accessibility

### Anchor

- `<a>` tag has an implicit aria-role called "link". For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role.
- For unit testing, use getByRole("link").

### Article

- `<article>` tag does not have an implicit aria-role so it is best to add an aria-label.
- For unit testing, use the content getByLabelText rather than getByRole.

### Button

- `<button>` tag has an implicit aria-role called "button". For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role.
- For unit testing, use getByRole("button").

### Division

- `<div>` tag does not have an implicit aria-role so it is best to add an aria-label.
- For unit testing, use the content getByLabelText rather than getByRole.

### Footer

- `<footer>` tag has an implicit aria-role called "contentinfo". For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role.
- For unit testing, use getByRole("content-info").

### Header

- `<header>` tag has an implicit aria-role called "banner". For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role.
- For unit testing, use getByRole("banner").

### Heading

- `<h1>`, `<h2>` and `<h3>` tags have implicit aria-roles called "heading". For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role.
- For unit testing, h1 is getByRole("heading", {level: 1}), h2 is getByRole("heading", {level: 2}) and h3 is getByRole("heading", {level: 3}).

### Image

- `<img />` tag has an implicit aria-role called "img". For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role.
- A unique aria label is not required as the alt attribute infers the label.
- For unit testing, use getByRole("img"). If there are more than one images, use getByAltText.

### Navigation

- `<nav>` tag has an implicit aria-role called "navigation". For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role.
- For unit testing, use getByRole("navigation").

### Paragraph

- `<p>` tag does not have an implicit aria-role so it is best to add an aria-label. For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles
- For unit testing, use the content getByLabelText rather than getByRole.

### Section

- `<section>` tag does not have an implicit aria-role so it is best to add an aria-label.
- For unit testing, use the content getByLabelText rather than getByRole.
