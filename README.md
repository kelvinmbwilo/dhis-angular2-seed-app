# DHIS2 SEED APP

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.14.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Making Sure index.html works well with dhis

Open the dist folder and make sure the path to three imports for inline.js, styles.bundle.js and main.bundle.js points to the root of your app.

## adding dhis2 app config file

In the same dist file add a file manifest.webapp with the contents as specified at http://dhis2.github.io/dhis2-docs/master/en/developer/html/dhis2_developer_manual_full.html#apps_creating_apps or 
following the standards from https://www.w3.org/TR/appmanifest/

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
