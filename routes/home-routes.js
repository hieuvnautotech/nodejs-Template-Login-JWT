const express = require("express");

const { indexView, tableView } = require("../controllers/homeController");
const router = express.Router();
const services = require("../services/render");
const controller = require("../controllers/controller");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/", indexView);
// router.get('/icons', iconsView);
// router.get('/map', mapView);
// router.get('/profile', profileView);
router.get("/table", services.homeRoutes); // nhấn nut bên layout thì gọi service ra

// API
router.post("/api/users", jsonParser, controller.create);
router.get("/api/users", controller.find);

module.exports = {
  routes: router,
};
