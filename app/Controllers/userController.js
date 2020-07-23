let response = require("../Libs/responseLib");
const Mongoose = require("mongoose");
let checkLib = require("../Libs/checkLib");
let userModel = Mongoose.model("users");
let authModel = Mongoose.model("auth");
let token = require("../Libs/tokenLib");

let loginUser = (req, res) => {
  let verifyData = (req, res) => {
    return new Promise((resolve, reject) => {
      if (req.body.name) {
        userModel.findOne({ name: req.body.name }).exec((err, result) => {
          if (result) {
            resolve(result);
          } else if (checkLib.isEmpty(result)) {
            let apiResponse = response.generate(
              false,
              null,
              404,
              "User not found! please sign up! "
            );

            reject(apiResponse);
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
            true,
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
    return new Promise((resolve, reject) => {
      token.generateToken(data, (err, res) => {
        if (res) {
          let tokenResponse = { token: res, userDetails: data };

          resolve(tokenResponse);
        } else {
          reject(err);
        }
      });
    });
  };
  let saveToken = (tokendetails) => {
    return new Promise((resolve, reject) => {
      console.log("inside save token gen");
      console.log(tokendetails.userDetails._id);
      authModel.findOne(
        { _id: tokendetails.userDetails._id },
        (err, result) => {
          if (err) {
            let apiResponse = response.generate(
              false,
              null,
              404,
              "Unable to connect to Internet"
            );
            reject(apiResponse);
          } else if (checkLib.isEmpty(result)) {
          }
        }
      );
      resolve(tokendetails);
      // authModel.findOne({})
    });
  };
  verifyData(req, res)
    .then(validatePassword)
    .then(tokengenerate)
    .then(saveToken)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send({ error: err });
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
