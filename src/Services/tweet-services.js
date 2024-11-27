const TweetRepo = require("../Repository/tweet-repo");
const HashtagRepo=require("../Repository/hashtag-repo")

class TweetServices {
  constructor() {
    this.tweetRepo = new TweetRepo();
    this.repo=new HashtagRepo();
  }

  async tweetcreation(data) {
    try {
      const hashtag=data.content.match(/#\w+/g);
      const hash=hashtag.map((val)=>{
          return val.substring(1)
      }).map(data=>data.toLowerCase());
      const tweet = await this.tweetRepo.createtweet(data);
      const allreadyPresentTags= await this.repo.getByName(hash);
      const tagsTitle=allreadyPresentTags.map((tag)=>{
        return tag.title
      })

      let newtag=hash.filter(tag=>!tagsTitle.includes(tag)
      )
      console.log(newtag) 
      newtag=newtag.map((tag)=>{
         return { title:tag, tweets:[tweet.id]}
      })
      await this.repo.bulkcreate(newtag);
      allreadyPresentTags.forEach((tag)=>{
          tag.tweets.push(tweet.id);
          tag.save();
      })
      
      return tweet;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }


  async gettweet(id)
  {
    try{
      const comment=await this.tweetRepo.findwithComment(id)
      return comment;
    }
    catch(err)
    {
         console.log(err)
         throw {err};
    }
  }
}

module.exports = TweetServices
