const express = require("express");
const Model = require("./auth-model");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Is Working");
});

router.post("/register", async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);

    const newUser = await Model.addUser({
      username: req.body.username,
      password: hash,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
