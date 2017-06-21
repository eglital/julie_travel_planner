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
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const itineraryRoutes = require("./routes/index");
app.use("/api", itineraryRoutes);

const emailRoutes = require("./routes/emailRoutes");
app.use("/api", emailRoutes);
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);
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
