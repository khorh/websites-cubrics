# Cubrics

Cubrics is a business transformation consultancy. To visit the live website, please go to https://www.cubrics.co.uk

# 1. Project's objective

To develop an easy to manage website for the client based on the high fidelity wireframes in Figma.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 2. Tech stack

- HTML/HTML5

### Interactivity

- Javascript
- React/Typescript

### Styling

- CSS/CSS3
- SASS

### Design system visualisation

- Storybook.js

### Testing

- Testing Library for unit testing
- Cypress for end-to-end (e2e) testing

### Content management

- Contenful API

# 3. Start this project

In the project directory, you can run:

### `npm start` to view the frontend development

### `npm run storybook` to view the design system

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# 4. Web Accessibility

This section aims to provide information on web accessibility considerations to improve the experience for those with visual impairements.

### Anchor

- `<a>` tag has an implicit role called "link". "link" is allowed but not recommended.
- For this website, navigation link has been assigned a role called "menuitem". Therefore for unit testing, use getByRole("menuitem").
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role.

### Article

- `<article>` tag has an implicit role called "article". "article" is allowed but not recommended.
- For this website, article is used frequently so aria labels have been added. Therefore for unit testing, use getByLabelText.
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/article_role.

### Button

- `<button>` tag has an implicit role called "button". "button" is allowed but not recommended.
- For this website, other aria roles are not suitable so the default has been used. Therefore for unit testing, use getByRole("button").
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role.

### Division

- `<div>` tag has an implicit role called "generic". "generic" should not be used.
- For this website, div is used frequently so aria labels have been added. Therefore for unit testing, use getByLabelText.

### Footer

- `<footer>` tag has an implicit role called "contentinfo". "contentinfo" is allowed but not recommended.
- For this website, other aria roles are not suitable so the default has been used. Therefore for unit testing, use getByRole("contentinfo").
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role.

### Header

- `<header>` tag has an implicit role called "banner". "banner" is allowed but not recommended.
- For this website, other aria roles are not suitable so the default has been used. Therefore for unit testing, use getByRole("banner").
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role.

### Heading

- `<h1>`, `<h2>` and `<h3>` tags have implicit roles called "heading". "heading" is allowed but not recommended.
- For this website, other aria roles are not suitable so the default has been used. For unit testing, h1 is getByRole("heading", {level: 1}), h2 is getByRole("heading", {level: 2}) and h3 is getByRole("heading", {level: 3}). And where there are more than one of the same type, use getByText.
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role.

### Image

- `<img />` tag has an implicit role called "img". "img" is allowed but not recommended.
- For this website, a unique aria label is not required as the alt attribute infers the label. For unit testing, use getByRole("img"). If there are more than one images, use getByAltText.
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role.

### Navigation

- `<nav>` tag has an implicit role called "navigation". "navigation" is allowed but not recommended.
- For this website, navigation bar has been assigned a role called "menu". Therefore for unit testing, use getByRole("menu").
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role.

### Paragraph

- `<p>` tag has an implicit role called "paragraph". "paragraph" is not recommended.
- For this website, paragraph is used frequently. Therefore for unit testing, use getByText.
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles

### Section

- `<section>` tag has an implicit role called "region". "region" is allowed but not recommended.
- For this website, section is used frequently so aria labels have been added. Therefore for unit testing, use getByLabelText.
- For more information, see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/section_role

# 5. Testing

This section provides information on the unit and end-to-end (e2e) testing that have been implemented in this project.

## 5.1 Unit testing

testing-library/react is used for unit testing. See https://testing-library.com/ for more information.

### `npm run test` - runs the tests

### `npm run test About.test.tsx` - runs a specific test file

### `npm run test:coverage` - generates the coverage report

### Queries

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

Sources:

https://testing-library.com/docs/queries/bytestid/

https://www.w3.org/TR/html-aria/#docconformance

## 5.2 e2e testing

cypress is used for e2e testing. See https://www.cypress.io/ for more information.

### `npx cypress open` - opens the desktop app and run the tests

At present e2e testing is completed on the navigation and considers responsive design. The contact button in the header section will be completed in due course as it requires setting up a fake email client.

Note adding `data-testid` for quering is useful for variations of the same design system component.

# 6. Production

### `npm run deploy`

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

# 7. Hosting

The project uses github pages for hosting on the client's account by forking this repository and syncing it when there are changes to requirements.
