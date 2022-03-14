const { verify } = require("jsonwebtoken");

exports.verifyAuthToken = (req, res, next) => {
  const authToken = req.headers["authorization"].split(" ")[1];
  const secret = req.app.get("jwt");
  const data = verify(authToken, secret);
  if (!!data) {
    console.log(" Next is being called ")
    res.locals.data = data
    next();
  } else {
    res.status(401).end();
  }
};
