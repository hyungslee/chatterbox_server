var express = require("express");
const Post = require("../models/index").Post;
var router = express.Router();

/* GET users listing. */
router.post("/post", async (req, res, next) => {
  const { username, text, roomid } = req.body;

  await Post.create({
    username,
    text,
    roomid
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

// router.post("/login", async (req, res, next) => {
//   const { userid, password } = req.body;

//   const userId = await User.find({ where: { userid } });

//   if (userId && userId.password === password) {
//     res.status(201).json("로그인 성공!!!");
//   } else {
//     res.status(400).json("Go Home!!");
//   }
// });

module.exports = router;
