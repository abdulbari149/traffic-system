const { Admin } = require("../models");

exports.verifyAdmin = async (req, res, next) => {
  try {
    console.log("admin verification runs", res.locals.data.id)
    const admin = await Admin.findById(res.locals.data.id);
    console.log({ admin })
    if (!admin) {
      let error = new Error("Admin Doesn't exists");
      error.status = 401;
      throw error;
    }
    next();
  } catch (error) {
    res.status(error.status).json({ message: error.message })
  }
};
