const { Warden } = require("../models");
const { validationResult } = require("express-validator");
const { hash, compare } = require("bcrypt");
const { sendSMS } = require("../lib/twilioSMS");
const jwt = require("jsonwebtoken");

class AuthController {
  response = {
    message: "",
    data: null,
    status: null,
  };

  registerWarden = async (req, res) => {
    registerBlock: try {
      const { first_name, last_name, email, password, phone_number } = req.body;
      const hashedPassword = await hash(password, 10);
      const wardenDoc = new Warden({
        first_name,
        last_name,
        email,
        phone_number,
        password: hashedPassword,
        authorized: true,
      });

      const data = await wardenDoc.save();

      this.response.message = "Successfully Saved";
      this.response.status = 200;
      this.response.data = data;
    } catch (error) {
      console.log(error);
      this.response.message = "Error Occured!";
      this.response.status = 404;
      this.response.data = error;
    }
    res.status(this.response.status).json(this.response);
  };

  login = async (req, res) => {
    const { email, password } = req.body;
    loginBlock: try {
      let wardenDoc;
      wardenDoc = await Warden.findOne({ email });

      if (!wardenDoc) {
        this.response.message = "Wrong Credentials: Email";
        this.response.status = 400;
        break loginBlock;
      }
      const isAuthorized = await compare(password, wardenDoc.password);
      if (!isAuthorized) {
        this.response.message = "You have entered a wrong password";
        this.response.status = 400;
        this.response.data = null;
        break loginBlock;
      }
      if (!wardenDoc.authorized) {
        this.response = {
          message: "You are currently unauthorized to access the application",
          status: 403,
          data: null,
        };
        break loginBlock;
      }

      this.response.message = "Warden is authorized to access the application";
      this.response.status = 200;
      this.response.data = wardenDoc;
    } catch (error) {
      this.response = {
        message: error,
        status: 400,
        data: null,
      };
    } finally {
      const token = jwt.sign(
        {
          email,
        },
        process.env.JWTSecret,
        {
          expiresIn: 12 * 60 * 60,
        }
      );
      res.setHeader("Authorization-Token", `Bearer ${token}`);
      res.status(this.response.status).json(this.response);
    }
  };

  sendVerificationCode = async (req, res) => {
    const { phone_number, email } = req.body;
    return sendSMS(phone_number).then((data) => {
      return res.status(data.status).send(data);
    });
  };

  forgetPassword = async (req, res) => {
    const { email } = req.body;
    forgetPasswordBlock: try {
      const wardenDoc = await Warden.findOne({ email });
      if (!wardenDoc) {
        this.response.message =
          "A User with the specificed email doesn't exist";
        this.response.status = 400;
        break forgetPasswordBlock;
      }

      if (!wardenDoc.authorized) {
        this.response = {
          message: "You are currently unauthorized",
          status: 403,
          data: null,
        };
        break forgetPasswordBlock;
      }

      this.response = await sendSMS(wardenDoc.phone_number);
    } catch (error) {
      this.response = {
        message: error,
        status: 404,
        data: null,
      };
    } finally {
      const token = jwt.sign(
        {
          email,
        },
        process.env.JWTSecret,
        {
          expiresIn: 5*60*1000,
        }
      );
      res.setHeader("Authorization-Token", `Bearer ${token}`);
      res.status(this.response.status).json(this.response);
    }
  };


  changePassword= async ( req,res) => {
    try {
      const { email,...extra } = res.locals.data
      const { password } = req.body
      const hashedPassword = await hash(password, 10);
      const wardenDoc = await Warden.findOneAndUpdate({ email }, { password:  hashedPassword })
      console.log(extra)
      console.log({ wardenDoc })

    } catch (error) {
      
    }
    

    res.send({ message: "password changed" })

  }
}



module.exports = new AuthController();
