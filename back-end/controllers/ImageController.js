const gridFsStream = require("../lib/gridFsStream");
class ImageController {
  response = {
    data: null,
    status: 0,
    message: "",
  };
  uploadImages = async (req, res) => {
    try {
      console.log({ id: req.body.userId, file: req.file });
      const { DbModel } = res.locals;
      const data = await DbModel.findByIdAndUpdate(req.body.userId, {
        $push: { images: req.file.id },
      });
      this.response = {
        message: "Images have been uploaded successfully",
        data: {
          id: req.file.id,
        },
        status: 200,
      };
    } catch (error) {
      this.response = {
        error,
        message: "An error occured",
        status: 404,
      };
    }
    res.status(this.response.status).json(this.response);
  };

  getProfilePic = async (req, res) => {
    try {
      console.log("Req runs");
      const { id } = res.locals.data;
      const { DbModel } = res.locals;
      const data = await DbModel.findById(id, ["images"]).populate({
        path: "images",
        match: { "metadata.imageType": "profilePic" },
      }).lean();
      res.status(200).json({ url: data.images[0].filename }) 
      } catch (error) {
      res.status(404).json({ error });
    }
  };

  getImages = async (req, res) => {
    try {
      const { DbModel, data } = res.locals;
      console.log({ data });
      const files = await DbModel.findById(data.id, ["images"])
        .populate("images")
        .lean();

      res.status(200).json(files);
    } catch (error) {
      res.status(404).json({ message: "ERROR_OCCURED" });
    }
  };

  getImageById = async (req, res) => {
    try {
      console.log("file req runs")
      console.log({ filename: req.params.filename })
      const gfsBucket = req.app.get("gfsBucket");
      const gfs = req.app.get("gfs");
      const file = await gfs.files.findOne({ filename: req.params.filename });
      if (!file) {
        throw new Error("File Not Found");
      }
      if (
        file.contentType !== "image/png" &&
        file.contentType !== "image/jpeg" &&
        file.contentType !== "image/jpg"
      ) {
        throw new Error("File Type is invalid");
      }
      gfsBucket.openDownloadStream(file._id).pipe(res);
    } catch (error) {
      res.status(404).json({ message: "Error Occured", error });
    }
  };
}
module.exports = new ImageController();
