let { config } = require("../config/appConfig");
let userCon = require("../Controllers/userController");
const userRoutes = (app) => {
  app.post(config.apiVersion + "/user/login", userCon.loginUser);
  /**
 * @api {post} /user/login

 * @apiGroup login User
 *
 * @apiParam {String} Username User's unique ID.
 *@apiParam {password} password of User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
  app.post(config.apiVersion + "/user/signup", userCon.createUser);
  /**
 * @api {post} /user/signup

 * @apiGroup Signup User
 *
 * @apiParam {String} name User's name.
 *@apiParam {password} password of User.
  *@apiParam {String} email email of User.
  *@apiParam {number} PhoneNo Phonenumber of User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
};


module.exports = {
  userRoutes: userRoutes,
};
