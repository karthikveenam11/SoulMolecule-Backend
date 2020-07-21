let express = require("express");
let path = require("path");
let fs = require("fs");
let { config } = require("./app/config/appConfig");
const { Router } = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("frontend"));

let routerPath = path.join(__dirname, "./app/routers");
fs.readdirSync(routerPath).forEach(function (file) {
  if (~file.indexOf(".js")) {
    let route = require(routerPath + "/" + file);
    route.userRoutes(app);
  }
});

console.log(routerPath);
app.listen(config.PORT, () => {
  console.log("App is listening on " + config.PORT);
});
