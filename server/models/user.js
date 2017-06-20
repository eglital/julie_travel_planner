const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  email: [],
  name: {
    type: String
  },
  facebookId: {
    type: String
  },
  itineraries: []
});

UserSchema.statics.findOrCreateFacebook = function(profile) {
  return User.findOne({
    facebookId: profile.id
  }).then(user => {
    if (user) {
      return user;
    } else {
      return new User({
        name: profile.displayName,
        facebookId: profile.id,
        email: profile.emails
      }).save();
    }
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
