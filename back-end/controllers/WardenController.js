const { Warden } = require("../models");
const { compare, hash } = require("bcrypt");
const { sendSMS } = require("../lib/twilioSMS");
const jwt = require("jsonwebtoken");
// Authorized --> 100
// Ok --> 200
// Error --> 404
class WardenController {
  response = { message: "", status: 0, data: null };

  authLogin = async (req, res) => {
   
  };

  verifySMS = async (req, res) => {
    
  };

  registerWarden = async (req, res) => {
    const { warden } = req.body;
    try {
      const hashedPassword = await hash(warden.password, 10);
      const wardenDoc = new Warden({
        ...warden,
        password: hashedPassword,
      });

      const data = await wardenDoc.save();
      this.response.message = "Successfully Saved";
      this.response.status = 200;
      this.response.data = data;
    } catch (error) {
      this.response.message = "Error Occured!";
      this.response.status = 404;
      this.response.data = error;
    }
    res.status(this.response.status).json(this.response);
  };

  getWardenData = async (req, res) => {
    const { _id } = res.locals.data;
    try {
      const wardenDoc = await Warden.findById(_id);

      if (!wardenDoc) {
        throw new Error("You have passed the wrong warden id");
      }

      this.response.message = "A warden with the provided id exists";
      this.response.data = wardenDoc;
      this.response.status = 200;
    } catch (error) {
      this.response.message = error.message;
      this.response.status = 404;
    }
    res.status(this.response.status).send(this.response);
  };
}

module.exports = new WardenController();
