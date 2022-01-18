const UserModel = require("../model/users");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res) {
  // UserModel.insertUser("kenny", "kenny@gmail.com", "1234");
  // UserModel.updateUserById("john", "john@gmail.com", "1234");
  // UserModel.deleteUserById("61e6af387c1af7af12d66c50").then((result) => {
  //   console.log("result", result);
  // });
  try {
    let data = await UserModel.selectAllUsers();
    console.log(data);
  } catch (err) {}
  res.render("index", { title: "Express" });
});

module.exports = router;
