const { model } = require("mongoose");
const commentRepo = require("../Repository/comment");
const TweetRepo = require("../Repository/tweet-repo");

class commentServices {
  constructor() {
    this.comment = new commentRepo();
    this.tweet = new TweetRepo();
  }

  async create(modelId, modelType, content, userId) {
    try {
      if (modelType == "Tweet") {
        var commentable = await this.tweet.findbyId(modelId);
      } else if (modelType == "Comment") {
        var commentable = await this.comment.findbyId(modelId);
      }

      const newComment = await this.comment.createComment({
        content: content,
        onModel: modelType,
        commentable: modelId,
        userId: userId,
        comments:[],
      });
      commentable.comments.push(newComment.id);
      await commentable.save();

      return newComment;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}

module.exports = commentServices
