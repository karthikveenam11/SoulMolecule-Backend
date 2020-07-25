let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
let fs = require("fs");
let cors = require("cors");

let routeNotFound = require("./app/Middlewares/routeValidation");
let { config } = require("./app/config/appConfig");
const { Router } = require("express");
const bodyParser = require("body-parser");
const app = express();
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static("frontend"));
let modelPath = path.join(__dirname, "./app/models");
fs.readdirSync(modelPath).forEach(function (file) {
  if (~file.indexOf(".js")) {
    require(modelPath + "/" + file);
  }
});
let routerPath = path.join(__dirname, "./app/routers");
fs.readdirSync(routerPath).forEach(function (file) {
  if (~file.indexOf(".js")) {
    let route = require(routerPath + "/" + file);
    route.userRoutes(app);
  }
});
app.use(routeNotFound.routeNotFound);
console.log(routerPath);
app.listen(config.PORT, () => {
  mongoose.connect(config.mongodb.url, { useMongoClient: true });
  console.log("App is listening on " + config.PORT);
});
