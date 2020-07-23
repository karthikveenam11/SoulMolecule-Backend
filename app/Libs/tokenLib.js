let jwt = require("jsonwebtoken");
let secret = "smkccss";
let generateToken = (data, callback) => {
  try {
    console.log(data);
    var token = jwt.sign(data.toJSON(), secret);
    callback(null, token);
  } catch (err) {
    callback(err, null);
  }
};
module.exports = {
  generateToken: generateToken,
};
