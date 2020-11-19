# Invoicer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Quick-start

```
git clone https://github.com/gnud/invoice-trending.git

cd client
```

Install [nvm](https://github.com/nvm-sh/nvm) first, to manage seveal node engines.
(or use [asdf](https://github.com/asdf-vm/asdf))

```
nvm install v10.13.0 
nvm use v10.13.0
```

```
npm install -g @angular/cli@v9.1.12
npm install
```

**Note**: 10.13.0 is the minimum node engine required or use v12

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

proxy.conf.json contains the backend server url, so that we can avoid CORS issues.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via Jest

Run `npm run test:coverage` to execute the unit tests via Jest

Run `npm run test:watch` to execute the unit tests  via Jest

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
