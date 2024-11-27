const Like = require("../model/like.js");

class likeRepo {
  async createLike(data) {
    try {
      console.log(data);
      const result = await Like.create(data);
      return result;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
  async findbyuserAndlikeable(data) {
    try {
      const result = await Like.findOne(data);
      return result;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}

module.exports = likeRepo;
