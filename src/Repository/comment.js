const Comment = require("../model/comments");

class commentRepo {
  async createComment(data) {
    try {
      console.log(data)
      const comment = await Comment.create(data);
      return comment;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async findbyId(id) {
    try {
      const comment = await Comment.findbyId(id);
      return comment;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}
module.exports = commentRepo
