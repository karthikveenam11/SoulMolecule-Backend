let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
let fs = require("fs");
let { config } = require("./app/config/appConfig");
const { Router } = require("express");
const bodyParser = require("body-parser");
const app = express();
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

console.log(routerPath);
app.listen(config.PORT, () => {
  mongoose.connect(config.mongodb.url, { useMongoClient: true });
  console.log("App is listening on " + config.PORT);
});
