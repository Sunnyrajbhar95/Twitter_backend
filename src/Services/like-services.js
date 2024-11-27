const likeRepo = require("../Repository/like-repo");
const TweetRepo = require("../Repository/tweet-repo");
const mongoose=require("mongoose")

class likeServices {
  constructor() {
    this.like = new likeRepo();
    this.tweet = new TweetRepo();
  }
  async createLike(data) {
    try {
      const result = await this.like.createLike(data);
      return result;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
  async togglelike(modelId, modelType, userId) {
    try {
      console.log()
      if (modelType == "Tweet") {
        var likeable = await this.tweet.findbyId(modelId)
         likeable.populate({path:'likes'});
        
      } else if (modelType =="Comment") {
        //todo
      } else {
        throw new Error("unknown model type");
      }

      const exists = await this.like.findbyuserAndlikeable({
        onModel: modelType,
        likeable: modelId,
        user: userId,
      });
      console.log(exists instanceof mongoose.Document)
      if(exists)
      {
          likeable.likes.pull(exists.id)  
          await likeable.save();
           await exists.deleteOne();;
          var isAdded=false;
      }
      else{
            const newLike=await this.like.createLike({
                onModel:modelType,
                likeable:modelId,
                user:userId
            })

           likeable.likes.push(newLike)
           await likeable.save();
           var isAdded=true;
      }
      console.log(likeable,":->Hello" )
      return  isAdded;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}

module.exports = likeServices;
