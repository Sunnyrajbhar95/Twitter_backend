const Tweet = require("../model/tweet");

class TweetRepo {
  async createtweet(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async findbyId(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async findwithComment(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "comments" });
      return tweet;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}

module.exports = TweetRepo;
