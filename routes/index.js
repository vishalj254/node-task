var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login", { message: "" });
});

router.get("/u/:message", function (req, res, next) {
  const { message } = req.params;
  res.render("login", { message: message });
});

router.get("/main/:data", function (req, res, next) {
  const { data } = req.params;
  res.render("index", { data: JSON.parse(data) });
});

router.get("/register", function (req, res, next) {
  res.render("register", { message: "" });
});

router.get("/register/:message", function (req, res, next) {
  const { message } = req.params;
  res.render("register", { message: message });
});

module.exports = router;
