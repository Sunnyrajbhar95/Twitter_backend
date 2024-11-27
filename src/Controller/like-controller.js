const likeServices=require('../Services/like-services');
const like=new likeServices();


const tweetlike=async(req,res)=>{
      try{
          const likes=await like.togglelike(req.query.modelId,req.query.modelType, req.user.id);
          return res.status(200).json({
              likes,
              success:true,
              message:"Tweet liked successfully",
              error:[]
          })
      }
      catch(err)
      {
           console.log(err)
           return res.status(500).json({
            success:false,
             message:"Something went wrong",
             error:err
           })
      }
}


module.exports={
    tweetlike
}