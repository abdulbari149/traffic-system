const { verify } = require("jsonwebtoken");

exports.verifyAuthToken = (req, res, next) => {
  try {
    const authToken = req.headers["authorization"].split(" ")[1];
    const secret = req.app.get("jwt");
    const data = verify(authToken, secret);
    console.log("Auth verification RUns", data)
    res.locals.data = data;
    next()
  } catch (error) {
    res.status(403).end() 
  }
};
