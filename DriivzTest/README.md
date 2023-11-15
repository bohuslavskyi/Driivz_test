Your given task is to construct a single-page application that tracks the International Space Station (ISS) over
a world map. The application will have only one screen that looks like this:
Mockup for the selected item:
How To:
• The ISS’s current location is delivered via a remote API.
• Learn how to use it here: http://open-notify.org/Open-Notify-API/ISSLocation-Now/
• Make sure you call the API every 2 seconds and no less. You might get
blocked.
5
Requirements:
• A user can view the current location of the ISS over right part of the screen
• The ISS location must be updated every 2 seconds (do not exceed this, otherwise
you will be banned ).
• A user can save the current location of the ISS by clicking over a dedicated
button
• A user can view a list of the saved ISS locations within a scrollable container on
the left. (Card must include only the Lat/Lon and date)
• A user can select a saved location, and the selected point will be shown on the
right part of the screen. Add some indication for selected card (like background).
• Second click on the selected location will deselect it. Show the current ISS
position on the right side.
6
• The saved locations list can be filtered via a filter input box above it.
• A user can delete a last-saved-location item via a click.
• When the user refreshes the application - the current state of the application
should be kept.
• The app should be responsive for the Web


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
