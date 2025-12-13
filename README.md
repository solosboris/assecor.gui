# AssecorGui

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

The additional instructions for usage of tables, routing, and CORS proxy are


ng new assecor.gui --routing --no-minimal
ng generate component person-table
ng generate component personsbycolor
ng generate component addperson
ng generate component personbyid

rm -rf node_modules package-lock.json
npm uninstall -g @angular/cli
npm install -g @angular/cli@21
npm cache clean --force
npm install --force --save-dev @angular-devkit/build-angular

ng build
#ng build --configuration=production
#ng run assecor.gui:server --configuration=production

npm install
npm install @angular/core@21.0.1 @angular/common@21.0.1 @angular/compiler@21.0.1 @angular/forms@21.0.1 @angular/platform-browser@21.0.1 @angular/platform-browser-dynamic@21.0.1 @angular/router@21.0.1 @angular/animations@21.0.1 @angular/platform-server@21.0.1 @angular/ssr@21.0.1 --save


npm install @angular/material@21.0.2 @angular/cdk@21.0.2 --save
npm install --save-dev semantic-release @semantic-release/git @semantic-release/changelog @semantic-release/github @semantic-release/npm

// provide unit tests
npm install --save-dev karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter jasmine-core @types/jasmine
npm install --save-dev undici-types

npm audit fix

@angular/compiler  21.0.0-next.0 - 21.0.1
Severity: high
Angular Stored XSS Vulnerability via SVG Animation, SVG URL and MathML Attributes - https://github.com/advisories/GHS
4hv-rgfq-gp49
fix available via `npm audit fix`
node_modules/@angular/compiler
  @angular/compiler-cli  21.0.0-next.0 - 21.0.1
  Depends on vulnerable versions of @angular/compiler
  node_modules/@angular/compiler-cli
  @angular/core  21.0.0-next.0 - 21.0.1
  Depends on vulnerable versions of @angular/compiler
  node_modules/@angular/core
    @angular/animations  21.0.0-next.0 - 21.0.1
    Depends on vulnerable versions of @angular/core
    node_modules/@angular/animations
    @angular/common  21.0.0-next.0 - 21.0.1
    Depends on vulnerable versions of @angular/core
    node_modules/@angular/common
      @angular/forms  4.4.0-RC.0 - 4.4.0 || 21.0.0-next.0 - 21.0.1
      Depends on vulnerable versions of @angular/common
      Depends on vulnerable versions of @angular/core
      Depends on vulnerable versions of @angular/platform-browser
      node_modules/@angular/forms
    @angular/platform-browser  21.0.0-next.0 - 21.0.1
    Depends on vulnerable versions of @angular/animations
    Depends on vulnerable versions of @angular/common
    Depends on vulnerable versions of @angular/core
    node_modules/@angular/platform-browser
    @angular/router  10.0.0-next.0 - 10.0.0-rc.1 || 21.0.0-next.0 - 21.0.1
    Depends on vulnerable versions of @angular/common
    Depends on vulnerable versions of @angular/core
    Depends on vulnerable versions of @angular/platform-browser
    node_modules/@angular/router
  @angular/platform-browser-dynamic  21.0.0-next.0 - 21.0.1
  Depends on vulnerable versions of @angular/common
  Depends on vulnerable versions of @angular/compiler
  Depends on vulnerable versions of @angular/core
  Depends on vulnerable versions of @angular/platform-browser
  node_modules/@angular/platform-browser-dynamic
  @angular/platform-server  21.0.0-next.0 - 21.0.1
  Depends on vulnerable versions of @angular/common
  Depends on vulnerable versions of @angular/compiler
  Depends on vulnerable versions of @angular/core
  Depends on vulnerable versions of @angular/platform-browser
  node_modules/@angular/platform-server

ng version

Angular CLI       : 21.0.3
Angular           : 21.0.1
Node.js           : 22.20.0
Package Manager   : npm 10.9.3
Operating System  : win32 x64

┌───────────────────────────────────┬───────────────────┬───────────────────┐
│ Package                           │ Installed Version │ Requested Version │
├───────────────────────────────────┼───────────────────┼───────────────────┤
│ @angular-devkit/build-angular     │ 21.0.1            │ ^21.0.1           │
│ @angular/animations               │ 21.0.1            │ ^21.0.1           │
│ @angular/build                    │ 21.0.1            │ ^21.0.1           │
│ @angular/cdk                      │ 21.0.2            │ ^21.0.2           │
│ @angular/cli                      │ 21.0.3            │ ^21.0.1           │
│ @angular/common                   │ 21.0.1            │ ^21.0.1           │
│ @angular/compiler                 │ 21.0.1            │ ^21.0.1           │
│ @angular/compiler-cli             │ 21.0.1            │ ^21.0.1           │
│ @angular/core                     │ 21.0.1            │ ^21.0.1           │
│ @angular/forms                    │ 21.0.1            │ ^21.0.1           │
│ @angular/material                 │ 21.0.2            │ ^21.0.2           │
│ @angular/platform-browser         │ 21.0.1            │ ^21.0.1           │
│ @angular/platform-browser-dynamic │ 21.0.1            │ ^21.0.1           │
│ @angular/platform-server          │ 21.0.1            │ ^21.0.1           │
│ @angular/router                   │ 21.0.1            │ ^21.0.1           │
│ @angular/ssr                      │ 21.0.1            │ ^21.0.1           │
│ rxjs                              │ 7.8.2             │ ~7.8.0            │
│ typescript                        │ 5.9.3             │ ~5.9.2            │
│ zone.js                           │ 0.15.1            │ ^0.15.1           │
└───────────────────────────────────┴───────────────────┴───────────────────┘

The packages from the directory node_modules are downloaded by project's generation
and not included to the current git repository.

ng generate component foundpersontable

npm ci
npm audit fix
ng test
ng serve --open --proxy-config src\proxy.conf.json