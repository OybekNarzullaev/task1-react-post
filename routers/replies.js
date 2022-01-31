const Reply = require("../models/Reply");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const replies = await Reply.find();
    res.status(200).json(replies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/:commentId", async (req, res) => {
  try {
    const replys = await Reply.find({
      commentId: req.params.commentId,
    });
    res.status(200).json(replys);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newReply = new Reply(req.body);
    const savedReply = await newReply.save();
    res.status(201).json(savedReply);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
module.exports = router;
