var express = require("express");
const Post = require("../models/index").Post;
var router = express.Router();

/* GET users listing. */
router.post("/post", async (req, res, next) => {
  const { username, text, roomid, userid } = req.body;

  await Post.create({
    username,
    text,
    roomid,
    userid
  })
    .then(() => {
      res.status(201).send(true);
    })
    .catch(err => {
      console.error(err.message);
      res.status(400).json("Fuck!!");
    });
});

router.get("/post", async (req, res, next) => {
  const data = await Post.findAll();
  res.send(data);
});

router.post("/room", async (req, res, next) => {
  const data = await Post.findAll({ where: { roomid: req.body.roomid } });
  res.send(data);
});
module.exports = router;
