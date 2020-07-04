var express = require("express");
var router = express.Router();
const User = require("./model/usermodel");

router.post("/addnewrecord", function (req, res, next) {
  const { name, age, contactno, email, password } = req.body;
  console.log({ name, age, contactno, email, password });
  const newUser = new User({ name, age, contactno, email, password });
  newUser.save(function (error, result) {
    if (error) {
      return res.redirect(
        "/register/Email or Contact number Already registered"
      );
    } else {
      return res.redirect("/register/Registration Successful");
    }
  });
});

router.post("/checklogin", function (req, res, next) {
  console.log(req.body);
  const { email, password } = req.body;

  // User.find({email,password}
  User.find(
    { $or: [{ email }, { contactno: email }], password },
    async function (error, result) {
      if (error) {
        return res.redirect("/u/Server Error");
      } else {
        if (result.length === 0) {
          return res.redirect("/u/Invalid Email or Password");
        } else {
          console.log("RESULT", result);
          return res.redirect("/main/" + JSON.stringify(result[0]));
        }
      }
    }
  );
});

module.exports = router;
