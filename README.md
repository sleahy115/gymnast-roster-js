# GymRoster

## Description
A roster for a gymnastic team that displays a list of gymnasts, information about the gym and allows an administrator to add, edit and delete gymnasts from the roster as needed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Setup
* clone repository from https://github.com/sleahy115/gym-roster-js
* `npm install -g @angular/cli`
* ` cd gym-roster-js`
* `npm install`
* `bower install`
* `ng-serve`
*  To add firebase...
   * `touch api-keys.ts` in the app folder
   * go to  https://firebase.google.com/ to set up an account
   * create a project in firebase called gymnast-roster
   * select the option to add firebase to web app
   * copy the information from the pop up into the api-keys.ts file
   * code example- in src/app-keys.ts
   `export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };`
    * add the api-keys file to the gitignore file. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Planning

* File structure
* Router
  -routing.ts
* Admin route
  * Add gymnast component
  -add-gymnast.component.ts
  -add-gymnast.component.html
  -add-gymnast.component.css
  * Edit gymnast component
  -edit-gymnast.component.ts
  -edit-gymnast.component.html
  -edit-gymnast.component.css
  * Delete gymnast component
  -delete-gymnast.component.ts
  -delete-gymnast.component.html
  -delete-gymnast.component.css
* About route
  -about.component.ts
  -about.component.html
  -about.component.css
* Roster route
  * Gymnast model
  -gymnast.model.ts
  * Gymnast service
  -gymnast.service
  * Team roster component
  -team-list.component.ts
  -team-list.component.html
  -team-list.component.css
  * Gymnast profile component
  -gymnast-profile.component.ts
  -gymnast-profile.component.html
  -gymnast-profile.component.css
  * Gymnast sorting pipe
    -sort-gymnasts.pipe.ts

### Development
1. Create gymnast model
2. Setup firebase project and add to app
3. Create team-list component with output.
4. Create gymnast-profile component with output.
5. Create pipe to sort by stats.
6. Create service.
7. Create Admin route.
8. Create add-gymnast component with form that saves to database.
9. Create edit-gymnast component with form that saves to database.
10. Create delete-gymnast component that removes data from site and database.
11. Create about route.
12. Create about component.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Copyright (c) 2017 Sarah Leahy All Rights Reserved.
