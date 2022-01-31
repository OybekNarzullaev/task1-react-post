const ObjectId = require("mongoose").ObjectId;
const User = require("../models/User");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.street,
      suite: req.body.suite,
      city: req.body.suite,
      zipcode: req.body.zipcode,
      geo: {
        lat: req.body.lat,
        lng: req.body.lng,
      },
    },
    phone: req.body.phone,
    website: req.body.website,
    company: {
      name: req.body.companyName,
      catchPhrase: req.body.catchPhrase,
      bs: req.body.bs,
    },
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Object(req.params.id);
    const user = await User.findById(id);
    !user ? res.send({ message: "Product Not Found" }) : res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).send({ message: "email is incorrect!" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
module.exports = router;
