// const jwt_decode = require("jwt-decode");

// const authApi = function (request, response, next) {
//   const authHeader = request.headers.authorization;                   // fetches the data from header
//   try {
//     const token = authHeader.split(" ")[1];
//     var decoded = jwt_decode(token);
//     request.body.userId = decoded.userId;
//     request.body.role = decoded.role;
//     // next();
//   } catch (e) {
//     response.status(400).send({ message: "UnAuthorized Request" });
//   }
// };

// module.exports = {
//   authApi,
// };
var mongoose = require("mongoose");
const userSchema = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const userDataCollection = mongoose.model('user', userSchema, 'users');
const authAPI = async function (req, res, next) {
  const authHeader = req.header('authorization');
  try {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
      if (err) {
        console.log(err);
        throw err;
      }
      // console.log(decoded);
      var isUser = await userDataCollection.findOne({ 'email': decoded.email, 'password': decoded.password }).exec();
      if (isUser != null) {
        req.body.userId = decoded.userId;
        req.body.email = decoded.email;
        req.body.password = decoded.password;
        req.body.role = decoded.role;
        next();
      }
      else {
        throw new Error("not authorized");
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "Unauthorized Request" });
  }
};

module.exports = {
  authAPI
};
