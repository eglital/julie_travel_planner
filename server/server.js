if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
//server
require("es6-promise").polyfill;
require("isomorphic-fetch");
const express = require("express");
const app = express();
const cors = require("cors");
// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//---------------------------------------
//Set response headers for CORS
//---------------------------------------
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(cors());

// ----------------------------------------
// Cookies
// ----------------------------------------
// const cookieSession = require('cookie-session');

// app.use(cookieSession({
//   name: 'session',
//   keys: ['asdf1234567890qwer']
// }));

// app.use((req, res, next) => {
//   res.locals.session = req.session;
//   res.locals.currentUser = req.session.currentUser;
//   next();
// });

// ----------------------------------------
// Method Override
// ----------------------------------------
// app.use((req, res, next) => {
//   var method;
//   if (req.query._method) {
//     method = req.query._method;
//     delete req.query._method;
//     for (let key in req.query) {
//       req.body[key] = decodeURIComponent(req.query[key]);
//     }
//   } else if (typeof req.body === "object" && req.body._method) {
//     method = req.body._method;
//     delete req.body._method;
//   }

//   if (method) {
//     method = method.toUpperCase();
//     req.method = method;
//   }

//   next();
// });

// ----------------------------------------
// Referrer
// ----------------------------------------
// app.use((req, res, next) => {
//   req.session.backUrl = req.header("Referer") || "/";
//   next();
// });

// ----------------------------------------
// Public
// ----------------------------------------
// app.use(express.static(`${__dirname}/public`));

// ----------------------------------------
// Logging
// ----------------------------------------
var morgan = require("morgan");
app.use(morgan("tiny"));
app.use((req, res, next) => {
  ["query", "params", "body"].forEach(key => {
    if (req[key]) {
      var capKey = key[0].toUpperCase() + key.substr(1);
      var value = JSON.stringify(req[key], null, 2);
      console.log(`${capKey}: ${value}`);
    }
  });
  next();
});

// ----------------------------------------
// Mongoose
// ----------------------------------------
var mongoose = require("mongoose");
app.use((req, res, next) => {
  if (mongoose.connection.readyState) {
    next();
  } else {
    require("./mongo")(req).then(() => next());
  }
});

// ----------------------------------------
// Routes
// ----------------------------------------
const initialFetch = require("./routes/initialFetch");
app.use("/initialFetch", initialFetch);

const googleApi = require("./routes/googleApi");
app.use("/api", googleApi);

// ----------------------------------------
// Error handler
// ----------------------------------------
// Defines next action for errors
function errorHandler(err, req, res, next) {
  console.error(`Error: ${err.stack}`);
  res.status(err.response ? err.response.status : 500);
  res.json({
    error: err.message
  });
}
// Tell the app to use the errorHandler middleware
app.use(errorHandler);

// ----------------------------------------
// Server
// ----------------------------------------

var port;

if (process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "test") {
  port = 8081;
} else {
  port = process.env.PORT || process.argv[2] || 8080;
}
// var host = "localhost";

var args = [port];
// process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening on port:${port}`);
});

// If we're running this file directly
// start up the server
if (require.main === module) {
  app.listen.apply(app, args);
}

module.exports = app;
