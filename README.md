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

npm uninstall -g @angular/cli
npm install -g @angular/cli@20

ng version
Angular CLI: 20.3.11
Node: 22.20.0
Package Manager: npm 10.9.3
OS: win32 x64

Package                         Version
---------------------------------------
@angular-devkit/architect       0.2100.0
@angular-devkit/build-angular   21.0.0
@angular-devkit/core            21.0.0
@angular-devkit/schematics      20.3.11 (cli-only)
@angular/build                  21.0.0
@angular/cli                    20.3.11 (cli-only)
@angular/compiler               21.0.0
@angular/compiler-cli           21.0.0
@schematics/angular             20.3.11 (cli-only)
rxjs                            7.8.2
typescript                      5.9.3

npm uninstall @angular-devkit/build-angular
npm install --save-dev @angular-devkit/build-angular
ng new assecor.gui --routing --no-minimal
ng add @angular/material
npm install @angular/platform-browser-dynamic@20
npm install @angular/animations@20
npm install zone.js@0.15.1 --save
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm install zone.js@0.15 --save
ng generate component person-table
ng generate component personsbycolor
ng generate component addperson
ng generate component personbyid
npm install
ng build

ng update @angular/core@21 @angular/cli@21 --force
ng version
Angular CLI       : 21.0.1
Angular           : 21.0.1
Node.js           : 22.20.0
Package Manager   : npm 10.9.3
Operating System  : win32 x64

┌───────────────────────────────────┬───────────────────┬───────────────────┐
│ Package                           │ Installed Version │ Requested Version │
├───────────────────────────────────┼───────────────────┼───────────────────┤
│ @angular/animations               │ 21.0.1            │ ^21.0.1           │
│ @angular/build                    │ 21.0.1            │ ^21.0.1           │
│ @angular/cdk                      │ 20.2.14           │ ^20.2.14          │
│ @angular/cli                      │ 21.0.1            │ ^21.0.1           │
│ @angular/common                   │ 21.0.1            │ ^21.0.1           │
│ @angular/compiler                 │ 21.0.1            │ ^21.0.1           │
│ @angular/compiler-cli             │ 21.0.1            │ ^21.0.1           │
│ @angular/core                     │ 21.0.1            │ ^21.0.1           │
│ @angular/forms                    │ 21.0.1            │ ^21.0.1           │
│ @angular/material                 │ 20.2.14           │ ^20.2.14          │
│ @angular/platform-browser         │ 21.0.1            │ ^21.0.1           │
│ @angular/platform-browser-dynamic │ 21.0.1            │ ^21.0.1           │
│ @angular/platform-server          │ 21.0.1            │ ^21.0.1           │
│ @angular/router                   │ 21.0.1            │ ^21.0.1           │
│ @angular/ssr                      │ 21.0.1            │ ^21.0.1           │
│ rxjs                              │ 7.8.2             │ ~7.8.0            │
│ typescript                        │ 5.9.3             │ ~5.9.2            │
│ zone.js                           │ 0.15.1            │ ^0.15.1           │
└───────────────────────────────────┴───────────────────┴───────────────────┘

remove all bundles

npm install
ng cache clean
ng build
ng build --configuration=production
ng run assecor.gui:server --configuration=production


The packages from the directory node_modules are downloaded by project's generation
and not included to the current git repository.

ng serve --open --proxy-config src\proxy.conf.json