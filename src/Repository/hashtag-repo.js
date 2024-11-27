const Hashtag = require("../model/hashtag");

class HashtagRepo {
  async bulkcreate(data) {
    try {
      console.log(data);
      const tag = await Hashtag.insertMany(data);
      console.log(tag);
      return tag;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async getByName(tagList) {
    try {
      const tags = await Hashtag.find({
        title:tagList
      });
      
      return tags;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}

module.exports = HashtagRepo;
