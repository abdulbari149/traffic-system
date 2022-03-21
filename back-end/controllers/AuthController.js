const { hash, compare } = require("bcrypt");
const { sendSMS } = require("../lib/twilioSMS");
const jwt = require("jsonwebtoken");

class AuthController {
  response = {
    message: "",
    data: null,
    status: null,
  };

  register = async (req, res) => {
    const { DbModel } = res.locals;
    registerBlock: try {
      const { password, ...user } = req.body;
      const hashedPassword = await hash(password, 10);
      const wardenDoc = new DbModel({
        ...user,
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

  login = async (req, res) => {
    const { email, password } = req.body;
    const { DbModel } = res.locals;
    loginBlock: try {
      const doc = await DbModel.findOne({ email });
      if (!doc) {
        this.response.message = "Wrong Credentials: Email";
        this.response.status = 400;
        break loginBlock;
      }
      const isAuthorized = await compare(password, doc.password);
      if (!isAuthorized) {
        this.response.message = "You have entered a wrong password";
        this.response.status = 400;
        break loginBlock;
      }
      if (!doc.authorized) {
        this.response = {
          message: "You are currently unauthorized to access the application",
          status: 403,
          data: null,
        };
        break loginBlock;
      }

      this.response.message = `${req.params.user} is authorized to access the application`;
      this.response.status = 200;
      this.response.data = doc;
    } catch (error) {
      this.response = {
        message: "Bad Request",
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
    const { phone_number } = req.body;
    return sendSMS(phone_number).then((data) => {
      return res.status(data.status).send(data);
    });
  };

  forgetPassword = async (req, res) => {
    const { email } = req.body;
    const { DbModel } = res.locals;

    forgetPasswordBlock: try {
      const doc = await DbModel.findOne({ email });
      if (!doc) {
        this.response.message =
          "A User with the specificed email doesn't exist";
        this.response.status = 400;
        break forgetPasswordBlock;
      }

      if (req.params.user === "warden" && !doc?.authorized) {
        this.response = {
          message: "You are currently unauthorized",
          status: 403,
          data: null,
        };
        break forgetPasswordBlock;
      }

      this.response = {
        message: "You can change your password",
        data: {
          phone_number: doc.phone_number,
        },
        status: 200,
      };
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
          expiresIn: 5 * 60 * 1000,
        }
      );
      res.setHeader("Authorization-Token", `Bearer ${token}`);
      res.status(this.response.status).json(this.response);
    }
  };

  changePassword = async (req, res) => {
    changePasswordBlock: try {
      const {
        DbModel,
        data: { email, ...extras },
      } = res.locals;
      const { password } = req.body;
      const hashedPassword = await hash(password, 10);
      const doc = await DbModel.findOneAndUpdate(
        { email },
        { password: hashedPassword }
      );

      if (doc.password !== password) {
        this.response = {
          message: "Password has been changed successfully",
          status: 200,
        };
        break changePasswordBlock;
      }
    } catch (error) {
      this.response = {
        message: error,
        status: 404,
      };
    }

    res.status(this.response.status).json(this.response);
  };
}

module.exports = new AuthController();
