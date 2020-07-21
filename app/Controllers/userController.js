let response = require("../Libs/responseLib");
let loginUser = (req, res) => {
  let apiResponse = response.generate(false, null, 200, {
    data: req.body.username,
  });
  console.log(req.body.username);
  res.send(apiResponse);
};
let createUser = (req, res) => {
  res.send("create user route");
};
module.exports = {
  loginUser: loginUser,
  createUser: createUser,
};
