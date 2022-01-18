const UserModel = require("../model/users");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const newUser = new UserModel({
    email: "1@2.com",
    password: "1234",
  });
  newUser.save();
  res.render("index", { title: "Express" });
});

module.exports = router;
