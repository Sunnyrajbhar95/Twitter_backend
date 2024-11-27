const commentServices = require("../Services/comment-services");
const services = new commentServices();

const PostComment = async (req, res) => {
  try {
    const comment = await services.create(
      req.query.modelId,
      req.query.modelType,
      req.body.content,
      req.user.id,
      
    );
    return res.status(200).json({
      comment,
      success: true,
      message: "Comment created Successfully",
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
  PostComment,
};
