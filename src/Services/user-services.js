const UserRepo = require("../Repository/user");

class userServices {
  constructor() {
    this.userSer = new UserRepo();
  }

  async create(data) {
    try {
      const user = await this.userSer.createUser(data);
      return user;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async find(data) {
    try {
      console.log(data)

      const user = await this.userSer.finduser(data.email);
      console.log(user)
      if (!user) {
        return { message: "User not found" };
      }

      if (!user.compare(data.password)) {
        return { message: "password not matched" };
      }

      const token = user.jwtToken();
      return token;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}
module.exports = userServices;
