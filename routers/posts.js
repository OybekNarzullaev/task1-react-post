const Post = require("../models/Post");
const User = require("../models/User");

const router = require("express").Router();

//get all
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
// get by user
router.get("/:user_id", async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) return res.status(404).json("User not found!");
    const posts = await Post.find({ authorId: req.params.user_id }).sort({
      createdAt: -1,
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/one/:id", async (req, res) => {
  try {
    console.log(req.params.id, "salom");
    const id = Object(req.params.id);
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
module.exports = router;
