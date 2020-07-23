let response = require("../Libs/responseLib");
const Mongoose = require("mongoose");
let userModel = Mongoose.model("users");
let token = require("../Libs/tokenLib");
let loginUser = (req, res) => {
  let verifyData = (req, res) => {
    return new Promise((resolve, reject) => {
      if (req.body.name) {
        userModel.findOne({ name: req.body.name }).exec((err, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(err);
          }
        });
      } else {
        let apiResponse = response.generate(
          false,
          null,
          404,
          "Mandatory fields missing, Please provide your userId and password"
        );

        reject(apiResponse);
      }
    });
  };
  let validatePassword = (userDetails) => {
    return new Promise((resolve, reject) => {
      if (req.body.password) {
        if (req.body.password === userDetails.password) {
          resolve(userDetails);
        } else {
          let apiResponse = response.generate(
            false,
            null,
            404,
            "Invalid password! please try again"
          );
          reject(apiResponse);
        }
      } else {
        let apiResponse = response.generate(
          false,
          null,
          404,
          "Email or password is missing"
        );
        reject(apiResponse);
      }
    });
  };
  let tokengenerate = (data) => {
    console.log("inside token gen");
    console.log(data);
    console.log("end token gen");
    return new Promise((resolve, reject) => {
      token.generateToken(data, (err, res) => {
        if (res) {
          let apiresponse = response.generate(false, "Token details", 200, {
            "token:": res,
            "UserDetails:": data,
          });
          resolve(apiresponse);
        } else {
          reject(err);
        }
      });
    });
  };
  verifyData(req, res)
    .then(validatePassword)
    .then(tokengenerate)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
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
