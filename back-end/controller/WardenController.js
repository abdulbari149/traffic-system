const { Warden } = require("../models");
const { compare, hash } = require("bcrypt");

// Authorized --> 100
class WardenController {
  response = { message: "", status: 0, data: null };

  async authLogin(req, res) {
    const { warden } = req.params;
    login: try {
      const dbWarden = await Warden.findOne({ wardenId: warden.wardenId });
      if (!dbWarden) {
        this.response.message = "You have passed the wrong id";
        this.response.status = 0;
        break login;
      }
      const isAuthorized = await compare(warden.password, dbWarden.password);
      if (!isAuthorized) {
        this.response.message = "You have entered a wrong password";
        this.response.status = 0;
        break login;
      }
      this.response.message = "Warden is authorized to access the application";
      this.response.message = 100;
      this.response.data = dbWarden;
    } catch (error) {
      console.error(error);
    } finally {
      res.send(response);
    }
  }

  async registerWarden(req, res) {
    const { warden } = req.params;
    try {
      const hashedPassword = await hash(warden.password, 10)
      const wardenDoc = new Warden({
        name: warden.name,
        wardenId: warden.wardenId,
        password: hashedPassword
      });
      
      const data = await wardenDoc.save();
      this.response.message = "Successfully Saved"
      this.response.status = 200
      this.response.data = data
    } catch (error) {
      this.response.message = "Error Occured!",
      this.response.status = 404
      this.response.data = error
    }
  }
}

module.exports = new WardenController();
