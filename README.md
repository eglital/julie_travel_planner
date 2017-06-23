# [Julie](https://julie-travel-planner.herokuapp.com/), AI for exploring cities.  

### About

Julie is a simple AI web application that takes into account your location, preferences and transportation, and helps you plan your day by giving 3 options at a time. Julie will calculate travel time and estimate the amount of time you are likely to spend at various locations through an algorithm that derives a length of time based on the type of location the user has selected. If the User wants to grab meals during the day, Julie will take care of that too. Users are able to use the app without logging in but they are also able to login in with Facebook to save the itinerary for viewing in the future.


## Technology

  * Node
  * React
  * Redux
  * MongoDB
  * Mongoose
  * Bootstrap
  * Google API
  * Foursquare API


## Quick Start

  Install dependencies:

```bash
$ npm install
```

Start the Mongo database: this needs to be in its own tab

```bash
$ mg
```

Start the server:

```bash
$ nodemon server/server.js: this needs to be in its own tab
```

Start the client: this needs to be in its own tab

```bash
$ cd client
$ npm start
```

## Test client

Testing on the client-side is done using the Jest framework. [https://facebook.github.io/jest/]
All tests are found in the __tests__ directory.

```bash
$ cd client
$ npm install
$ npm test
```

## Test server

  To run the test suite, first install the dependencies, start a mongo server,
  then `cd server`, then run `jasmine`:

```bash
$ npm install
$ cd server
$ jasmine
```

## Developers

[Egle Libby](https://github.com/eglital)  
[Nicholas Romeo](https://github.com/Throw22)  
[Renzo Tomlinson](https://github.com/rttomlinson)  
[William Whitworth](https://github.com/William-Charles)
