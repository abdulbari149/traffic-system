const { Warden, WardenImage, Challan, WardenApproval } = require("../models");
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
    approvalListBlock: try {
      const wardenList = await WardenApproval.find({
        adminId: res.locals.data.id,
      }).populate("wardenId", ["first_name", "last_name", "email"]);

      if (wardenList.length > 0 && wardenList.length <= 10) {
        this.response = {
          data: wardenList,
          status: 200,
          message: "Your Warden List is",
        };
        break approvalListBlock;
      }

      const docs = await Warden.find({ authorized: false }, [
        "first_name",
        "last_name",
        "email",
        "status"
      ])
        .limit(10)
        .lean();

      for (let i = 0; i < docs.length; i++) {
        const saveToWardenApproval = await WardenApproval.create({
          wardenId: docs[i]._id,
          adminId: res.locals.data.id,
          status: docs[i]._doc.status 
        });
      }

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

  getWardenDetailsById = async (req, res) => {
    try {
      const doc = await Warden.findById(req.params.id).populate("images");
      this.response = {
        data: {
          ...doc._doc,
          challans: undefined,
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

  authorizeWarden = async (req, res) => {
    authorizeBlock: try {
      const warden = await Warden.findByIdAndUpdate(req.body.wardenId, {
        authorized: true,
        status: "Approve",
      });
      if (!warden) {
        this.response = {
          message: "Warden doesn't exists",
          status: 404,
        };
        break authorizeBlock;
      }
      this.response = {
        message: "Warden has been authorized Successfully",
        status: 200,
      };
    } catch (error) {
      this.response = {
        error,
        status: 400,
      };
    }
    res.status(this.response.status).json(this.response);
  };
  declineWarden = async (req, res) => {
    declineBlock: try {
      const warden = await Warden.findByIdAndUpdate(req.body.wardenId, {
        status: "Decline",
      });
      if (!warden) {
        this.response = {
          message: "Warden doesn't exists",
          status: 404,
        };
        break declineBlock;
      }
      this.response = {
        message: "Warden has been Declined",
        status: 200,
      };
    } catch (error) {
      this.response = {
        error,
        status: 400,
      };
    }
    res.status(this.response.status).json(this.response);
  };
}

module.exports = new WardenController();
