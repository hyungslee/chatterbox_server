var express = require("express");
const Room = require("../models/index").Room;
var router = express.Router();

/* GET users listing. */
router.post("/room", async (req, res, next) => {
  const { roomname } = req.body;

  await Room.create({
    roomname
  })
    .then(() => {
      res.status(201).send(true);
    })
    .catch(err => {
      console.error(err.message);
      res.status(400).json("Fuck!!");
    });
});

router.get("/room", async (req, res, next) => {
  const data = await Room.findAll();
  res.send(data);
});

module.exports = router;
