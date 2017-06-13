const mongoose = require("mongoose");

// Set test environment
process.env.NODE_ENV = "test";

beforeAll(done => {
  if (mongoose.connection.readyState) {
    done();
  } else {
    require("./../../mongo")().then(() => done());
  }
});

afterEach(done => {
  require("./../../seeds/clean")()
    .then(() => done())
    .catch(e => console.error(e.stack));
});
