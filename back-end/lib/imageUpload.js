const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const path = require("path")

const { ObjectID  } = require("mongoose")
const crypto = require("crypto")
const storage = new GridFsStorage({
    url: process.env.URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'warden_image',
            metadata: {
              imageType:  req.query.imageType,
            }
          };
          resolve(fileInfo);
        });
      });
  }
});

module.exports = function(req, res, next){
  console.log({ req: req.file })
  const upload = multer({ storage }).single("file");
  upload(req, res, function(err) {
    if(err){console.error(err)}
    console.log("request received")
    next()
  })
}
