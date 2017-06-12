var mongoose = require("mongoose");

module.exports = () => {
  var collections = mongoose.connection.collections;

  var collectionKeys = Object.keys(collections);

  var promises = [];

  collectionKeys.forEach(key => {
    var promise = collections[key].remove();
    promises.push(promise);
  });

  return Promise.all(promises);
};
