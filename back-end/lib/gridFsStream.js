const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

const  gridFsStream = (bucketName) => {
  let gfs;
  const conn = mongoose.connection;
  conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection(bucketName);
  });
  return gfs
};

exports.getImageByFileName = (filename) => {
  const gfs = gridFsStream()
  

}