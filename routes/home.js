const express = require('express')
const router = express.Router()
const Card = require('../module/card')

router.get("/", async (req, res) => {
    const cards = await Card.getAllCards()
    res.render("index", {
      title: "Home page",
      cards
    });
  });

module.exports = router
