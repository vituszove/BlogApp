const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    require: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String
  }
});

module.exports = Blog = mongoose.model("blog", BlogSchema);
