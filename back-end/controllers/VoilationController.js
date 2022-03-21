const { Voilation } = require("../models");

class VoilationController {
  response = {
    data: null,
    message: "",
    status: 0,
  };

  getVoilations = async (req, res) => {
    const { v_type } = req.query;
    try {
      const voilations = await Voilation.find({ v_type });
      this.response = {
        data: voilations,
        message: "Succees",
        status: 200,
      };
    } catch (error) {
      this.response = {
        message: error,
        status: 404,
      };
    } finally {
      res.status(this.repsonse.status).json(this.response);
    }
  };

  updateVoiationPrice = async (req, res) => {
    try {
      const { price, id } = req.body;
      const voilation = await Voilation.findByIdAndUpdate(id, { price });
      if (voilation.price !== price) {
        this.response = {
          message:
            "An error occured while updating the price, Please try again",
          status: 404,
        };
      }
      this.response = {
        message: "Price has been updated Successfully",
        status: 200,
      };
    } catch (error) {
      this.response = {
        message: error,
        status: 404,
      };
    } finally {
      res.status(this.response.status).json(this.response);
    }
  };


}

module.exports  = new VoilationController()