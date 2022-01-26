const { Warden } = require("../models");
const { compare, hash } = require("bcrypt");
const { sendSMS } = require("../lib/twilioSMS"),
  jwt = require("jsonwebtoken");
// Authorized --> 100
// Ok --> 200
// Error --> 404
class WardenController {
  response = { message: "", status: 0, data: null };

  authLogin = async (req, res) => {
    const { warden } = req.body;
    let wardenDoc;
    login: try {
      wardenDoc = await Warden.findOne({ wardenId: warden.wardenId });

      if (!wardenDoc) {
        this.response.message = "You have passed the wrong id";
        this.response.status = 0;
        this.response.data = null;
        break login;
      }
      const isAuthorized = await compare(warden.password, wardenDoc.password);
      if (!isAuthorized) {
        this.response.message = "You have entered a wrong password";
        this.response.status = 0;
        this.response.data = null;
        break login;
      }

      this.response.message = "Warden is authorized to access the application";
      this.response.status = 100;
      this.response.data = wardenDoc;
    } catch (error) {
      console.error(error);
    } finally {
      const token = jwt.sign(
        {
          ...wardenDoc
        },
        JWTSecret,
        {
          expiresIn: 12 * 60 * 60,
        }
      );
      res.setHeader("Authorization-Token", `Bearer ${token}`);
      res.send(this.response);
    }
  };

  verifySMS = async (req, res) => {
    const { authStatus } = req.query;
    const wardenData = res.locals.warden
    sms: try {
      const wardenDoc = await Warden.findById(wardenData._id);
      const random4DigitCode = Math.trunc(Math.random() * 1000);
      const data = await sendSMS(
        random4DigitCode,
        wardenDoc.verification_number
      );
      console.log({ data })
      this.response.message = "code has been sent";
      this.response.status = 200;
      this.response.data = {
        code: random4DigitCode,
        expireTime: 5 * 60 * 1000,
      };
    } catch (error) {
      console.error(error);
    }
    res.send(this.response);
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
      (this.response.message = "Error Occured!"), (this.response.status = 404);
      this.response.data = error;
    }
    res.send(this.response);
  };

  getWardenData = async (req, res) => {
    const { _id } = res.locals.warden
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
  }
}

module.exports = new WardenController();
