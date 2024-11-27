const User = require("../model/user");

class UserRepo {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async getUser(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
  async finduser(data)
  {
    try{
       const user=await User.findOne({email:data})
       return user;
    }
    catch(err)
    {
      console.log(err);
        throw {err};
    }
  }
}
module.exports = UserRepo;
