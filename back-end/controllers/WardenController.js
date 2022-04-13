const { Warden, WardenImage, Challan, WardenApproval } = require("../models");
const { compare, hash } = require("bcrypt");
const { sendSMS } = require("../lib/twilioSMS");
const async = require("async");
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
      // status --> decline, uncheck
      const wardenList = await WardenApproval.find({
        adminId: res.locals.data.id,
        status: req?.query?.status ?? "uncheck",
      })
        .populate("wardenId", ["first_name", "last_name", "email"])
        .lean();

      if (
        (wardenList.length > 0 && wardenList.length <= 10) ||
        req.query.status === "decline"
      ) {
        this.response = {
          data: wardenList?.map((warden) => ({
            ...warden.wardenId,
            status: warden.status,
          })),
          status: 200,
          message: "Your Warden List is",
        };
        break approvalListBlock;
      }

      const docs = await Warden.find({ authorized: false, status: "onhold" }, [
        "first_name",
        "last_name",
        "email",
        "status",
      ])
        .limit(10)
        .lean();

      const updateWardens = new Promise((resolve, reject) => {
        async.eachSeries(
          docs,
          function updateObject(obj, done) {
            Warden.updateOne(
              { _id: obj._id },
              { $set: { status: "uncheck" } },
              done
            );
          },
          function allDone(err) {
            if (err) {
              reject(err);
            }
            resolve();
          }
        );
      });
      const wardensUpdatedDoc = await updateWardens;
      let approvalData = docs.map((doc) => ({
        wardenId: doc._id,
        adminId: res.locals.data.id,
        status: "uncheck",
      }));
      const wardenApprovals = await WardenApproval.insertMany(approvalData);
      let responseData = docs.map((doc) => ({
        first_name: doc.first_name,
        last_name: doc.last_name,
        email: doc.email,
        _id: doc._id,
        status: "uncheck",
      }));

      this.response = {
        data: responseData,
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
      const doc = await Warden.findById(req.params.id, "-password").populate(
        "images"
      );
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
      console.log("runs");
      const wardenApproval = await WardenApproval.findOneAndUpdate(
        { wardenId: req.body.wardenId, adminId: res.locals.data.id },
        {
          status: "approve",
        }
      );
      if (!wardenApproval) {
        this.response = {
          message: "Warden doesn't exists",
          status: 404,
        };
        break authorizeBlock;
      }

      const warden = await Warden.findByIdAndUpdate(req.body.wardenId, {
        status: "approve",
        authorized: true,
      });
      console.log({ warden });

      this.response = {
        data: {
          ...warden._doc,
          status: "approve",
          authorized: true,
          password: undefined,
        },
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
      const updateFields = {
        status: "decline",
        authorized: false,
      };
      const wardenDecline = await WardenApproval.findOneAndUpdate(
        { wardenId: req.body.wardenId, adminId: res.locals.data.id },
        { ...updateFields }
      );
      if (!wardenDecline) {
        this.response = {
          message: "Warden doesn't exists",
          status: 404,
        };
        break declineBlock;
      }
      const warden = await Warden.findByIdAndUpdate(req.body.wardenId, {
        ...updateFields,
      });

      this.response = {
        data: {
          ...warden._doc,
          ...updateFields,
          password: undefined,
        },
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
  resetWardenStatus = async (req, res) => {
    try {
      const wardens = await Warden.updateMany(
        {},
        { status: "onhold", authorized: false }
      );

      const wardenApprovalsDeleted = await WardenApproval.deleteMany({});
      res
        .status(200)
        .json({ message: "Warden Updated", wardens, wardenApprovalsDeleted });
    } catch (error) {
      console.log({ error });
      res.status(500).json(error);
    }
  };

  deleteWarden = async(req,res) => {
    try{
      const result = await WardenApproval.findOneAndDelete({ wardenId: req.body.wardenId, adminId: res.locals.data.id })
      if(!result){
        let error = new Error()
        error.messaage = "Not Found"
        error.status = 404
        throw error
      }
      const wardenResult = await Warden.findOneAndDelete({ _id : req.body.wardenId })
      res.status(200).json({ result, wardenResult })

    }catch(error){
      res.status(error?.status ?? 500).json({ ...error })
    }

  }
}

module.exports = new WardenController();
