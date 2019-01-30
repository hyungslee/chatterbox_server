var express = require("express");
const User = require("../models/index").User;
var router = express.Router();

/* GET users listing. */
router.post("/signup", async (req, res, next) => {
  const { userid, password } = req.body;

  await User.create({
    userid,
    password
  })
    .then(() => res.status(201).json("가입완료"))
    .catch(err => {
      console.error(err.message);

      res.status(400).json("Fuck!!");
    });
});

router.post("/login", async (req, res, next) => {
  const { userid, password } = req.body;

  const userId = await User.find({ where: { userid } });

  if (userId && userId.password === password) {
    res.status(201).json("로그인 성공!!!");
  } else {
    res.status(400).json("Go Home!!");
  }
});

module.exports = router;
