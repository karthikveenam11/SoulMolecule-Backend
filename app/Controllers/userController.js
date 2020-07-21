let response = require("../Libs/responseLib");
const Mongoose = require("mongoose");
let userModel = Mongoose.model("users");
let loginUser = (req, res) => {
  if (req.body.name && req.body.password) {
    userModel.findOne({ name: req.body.name }).exec((err, result) => {
      console.log("coming here");
      if (result) {
        if (req.body.password === result.password) {
          let apiResponse = response.generate(false, null, 200, result);
          res.send(apiResponse);
        } else {
          let apiResponse = response.generate(
            true,
            "Invalid password",
            403,
            null
          );
          res.send(apiResponse);
        }
      } else {
        let apiResponse = response.generate(true, err, 404, null);
        res.send(apiResponse);
      }
    });
  }
};
let createUser = (req, res) => {
  const createUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phoneNo: req.body.phoneNo,
  }).save((err, result) => {
    if (err) {
      let apiResponse = response.generate(true, err, 404, null);
      res.send(apiResponse);
    } else {
      let apiResponse = response.generate(false, null, 200, result);
      res.send(apiResponse);
    }
  });
};
module.exports = {
  loginUser: loginUser,
  createUser: createUser,
};
