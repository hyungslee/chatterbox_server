var express = require("express");
const User = require("../models/index").User;
var router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;

  await User.create({
    username,
    password
  })
    .then(() => {
      res.status(201).send(true);
    })
    .catch(err => {
      console.error(err.message);
      res.status(400).json("Fuck!!");
    });
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  const finduser = await User.find({ where: { username } });

  if (finduser && finduser.password === password) {
    res.status(201).send(true);
  } else {
    res.status(400).json("Go Home!!");
  }
});

module.exports = router;
