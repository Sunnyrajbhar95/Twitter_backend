const express = require("express");
const app = express();
const Connect = require("./config/database");
// const Tweet = require("./model/tweet");
// const Comment = require("./model/comments");
const router = require("./routes/index");
bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();

// const HashtagRepo = require("./Repository/hashtag-repo");
// const likeServices = require("./Services/like-services");
// const likeRepo = require("./Repository/like-repo");
// const UserRepo = require("./Repository/user");
// const TweetServices = require("./Services/tweet-services");
 const Port=process.env.PORT||4000;
app.use("/api/v1", router);
const Server = () => {
  app.listen(Port, async () => {
    console.log("server Started");

    await Connect();  
  });
};

Server();
