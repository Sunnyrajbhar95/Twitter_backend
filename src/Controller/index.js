const TweetServices = require("../Services/tweet-services");
const tweetServices = new TweetServices();

const CreateTweet = async (req, res) => {
  try {
    // console.log(req.body, "hello");
    const tweet = await tweetServices.tweetcreation(req.body);
    return res.status(200).json({
      tweet,
      success: true,
      message: "Tweet created successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      err: err,
    });
  }
};
const getTweet = async (req, res) => {
  try {
    const tweet = await tweetServices.gettweet(req.params.id);
    return res.status(200).json({
      tweet,
      success: true,
      message: "Tweet fetched succefully",
      err: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
module.exports = {
  CreateTweet,
  getTweet
};
