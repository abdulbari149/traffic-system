class ImageController {
  response = {
    data: null,
    status: 0,
    message: "",
  };
  uploadImages = async (req, res) => {
    try {
      this.response = {
        message: "Images have been uploaded successfully",
        data: {
          id: req.file.id,
        },
        status: 200,
      };
    } catch (error) {
      this.response = {
        message: "An error occured",
        status: 200,
      };
    }
    res.status(this.response.status).json(this.response);
  };

  getImage = async (req, res) => {
    try {
      const {
        DbModel,
        data,
      } = res.locals;
      console.log({ data })
      const files = await DbModel.findById(data.id).populate("images");
      res.status(200).json(files)
    } catch (error) {
      res.status(404).json({ message: "ERROR_OCCURED" })
    }
  };
}
module.exports = new ImageController();
