const { Warden, WardenImage, Challan } = require("../models");
const { compare, hash } = require("bcrypt");
const { sendSMS } = require("../lib/twilioSMS");
const jwt = require("jsonwebtoken");
// Authorized --> 100
// Ok --> 200
// Error --> 404
class WardenController {
  response = { message: "", status: 0, data: null };
  
  

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

  getWardenListForApproval = async (req, res) => {
    try {
      const docs = await Warden.find({ authorized: false }, [
        "first_name",
        "last_name",
        "email",
      ]);

      this.response = {
        data: docs,
        status: 200,
      };
    } catch (error) {
      this.response = {
        message: "An error occurred",
        error,
        status: 404,
      };
    }
    res.status(this.response.status).json(this.response);
  };

  getWardenInfo = async (req,res) => {
      

  }
  getWardenDetailsById = async (req, res) => {
    try {
      const doc = await Warden.findById(req.params.id).populate("images");
      this.response = {
        data: {
          ...doc._doc,
          challans: undefined
        },
        status: 200,
      };
    } catch (error) {
      this.response = {
        error,
        message: "An Error Occured",
        status: 404,
      };
    }
    res.status(this.response.status).json(this.response);
  };
}

module.exports = new WardenController();
