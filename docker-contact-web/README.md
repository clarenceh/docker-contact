# DockerContactWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0-rc.0.

> NOTE: Replace the following Docker image id with your Docker Hub id

### Build app for local
    ng build

### Build app for production
    ng build --prod

### Build image
    docker build -t clarenceho/docker-contact-web .
    
### Tag image
    docker tag [image-id] clarenceho/docker-contact-web:1.0.0

### Push image
    docker push clarenceho/docker-contact-web:1.0.0

### Run container
    docker run --name docker-contact-web -p 8080:80 -d clarenceho/docker-contact-web:1.0.0

## Project creation
    ng new docker-contact-web --style=scss

## Install Angular Material
    yarn add @angular/material

## Hammerjs
    yarn add hammerjs
    yarn add @types/hammerjs --dev

## Lodash
    yarn add lodash
    yarn add @types/lodash --dev

## @ngrx/store
    yarn add @ngrx/core @ngrx/store

## @ngrx/store-devtools
    yarn add @ngrx/store-devtools

## @ngrx/effects
    yarn add @ngrx/effects  

## reselect
    yarn add reselect

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
