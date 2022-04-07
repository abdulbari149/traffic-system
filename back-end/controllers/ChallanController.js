const { Challan, Warden, Citizen } = require("../models");
const { Types } = require("mongoose");
class ChallanController {
  response = {
    data: null,
    message: "",
    status: 0,
  };
  // voilation,
  // citizen,
  // PSID_no,
  // place_of_voilation,
  // district,
  // city,
  // province,
  // vehicle_registration_no,
  // traffic_sector,
  // fine_imposed,wwwww
  submitChallan = async (req, res) => {
    try {
      const { id: warden } = res.locals.data;
      const data = await Challan.create({ ...req.body, warden });
      console.log({ data })
      this.response = {
        message: "Your challan has been successfully submitted",
        status: 200,
        data,
      };
    } catch (error) {
      this.response = {
        message: error.message,
        status: 404,
      };
    }
    res.status(this.response.status).json(this.response);
  };
  getChallans = async (req, res) => {
    try {
      const { email, id } = res.locals.data;
      console.log({ id });
      const { DbModel } = res.locals;
      const data = await DbModel.findById(id, { challans: 1 }).populate({
        path: "challans",
        populate: {
          path: "voilation",
          model: "Voilation",
        },
      });
      console.log({ data });
      this.response = {
        data: data.challans.map((challan) => ({
          ...challan._doc,
          issued_date: challan.date,
        })),
        message: "These are the registered challans",
        status: 200,
      };
    } catch (error) {
      this.response = {
        message: error.message,
        status: 404,
      };
    }
    res.status(this.response.status).json(this.response);
  };

  getChallanRecords = async (req, res) => {
    console.log(req.query);
    try {
      const { page, paid } = req.query;
      const limit = 10;
      const docs = await Challan.find(
        { wardenId: res.locals.data.id, paid: Boolean(parseInt(paid)) },
        ["citizenId", "vehicle_registration_no"],
        {
          limit,
          skip: parseInt(page, 0) * 10,
        }
      ).populate("citizenId");
      this.response = {
        data: docs.map((doc) => ({
          ...doc._doc,
          citizenId: undefined,
          name: doc.citizenId.name,
        })),
        message: "Here's the record of challans",
        status: 200,
      };
    } catch (error) {
      this.response = {
        error,
        message: "BAD_REQUEST",
        status: 400,
      };
    }
    res.status(this.response.status).json(this.response);
  };

  getChallanById = async (req, res) => {
    try {
      const id = req.params.challan_id;
      const doc = await Challan.findById(id).populate(["citizenId", ""]);
      this.response = {
        data: {
          ...doc._doc,
          issued_date: doc.date,
        },
        status: 200,
      };
    } catch (error) {
      this.response = {
        error,
        message: "An Error Occured",
        status: 400,
      };
    }
    res.status(this.response.status).json(this.response);
  };
}

module.exports = new ChallanController();
