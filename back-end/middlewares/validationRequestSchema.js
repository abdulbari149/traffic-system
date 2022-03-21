const { validationResult } = require("express-validator")

exports.validationRequestSchema = (req,res,next) => {
  console.log("Validation Schema runs")
  const errors = validationResult(req);
  console.log({  errors  })
  if (!errors.isEmpty()) {
    console.log("Error running")
    const response = {
      data: errors.array(),
      message: "Validation Error",
      status: 404,
    };
    return res.status(response.status).json(response)
  }
  next()
}