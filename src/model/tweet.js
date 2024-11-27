const mongoose = require("mongoose");
const Comment = require("./comments");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "tweet must be 250 character"],
    },
    hashtag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",  
      }
    ]
  },

  { timestamps: true }
);
const Tweet = new mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
