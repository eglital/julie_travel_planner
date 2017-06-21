const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  email: {
    type: String
  },
  name: {
    type: String
  },
  facebookId: {
    type: String
  },
  itineraries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Itinerary"
    }
  ]
});

UserSchema.statics.findOrCreateFacebook = function(profile) {
  return User.findOne({
    facebookId: profile.id
  }).then(user => {
    if (user) {
      return user;
    } else {
      return new User({
        name: profile.name,
        facebookId: profile.id,
        email: profile.email
      }).save();
    }
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
