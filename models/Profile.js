const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  location: {
    type: String
  },
  occupation: { type: String },
  bio: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  avatar: { type: String }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
