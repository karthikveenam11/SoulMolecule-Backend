let { config } = require("../config/appConfig");
let userCon = require("../Controllers/userController");
const userRoutes = (app) => {
  app.post(config.apiVersion + "/user/login", userCon.loginUser);
  app.post(config.apiVersion + "/user/signup", userCon.createUser);
};
/**
 * @api {post} /user/login

 * @apiGroup login User
 *
 * @apiParam {String} Username User's unique ID.
 *@apiParam {password} password of User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

module.exports = {
  userRoutes: userRoutes,
};
