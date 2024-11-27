const mongoose = require("mongoose");

const hashTagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    tweets: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const Hashtag = mongoose.model("Hashtag", hashTagSchema);
module.exports = Hashtag;
