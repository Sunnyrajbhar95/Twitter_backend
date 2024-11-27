const UserRepo = require("../Repository/user");
const repo = new UserRepo();
var jwt = require('jsonwebtoken'); 
const isAuth = async (req, res, next) => {
  const token = req.headers["access-token"];
  const user = jwt.verify(token,process.env.SECRET_KEY);
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Invalid token",
    });
  }
  const response = await repo.getUser(user.id);
  if (!response) {
    return res.status(500).json({
      success: false,
      message: "Invalid user",
    });
  }
  req.user = user;
  next();
};

module.exports = isAuth;
