const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("catalog", {
      title: "Catalog",
    });
  });

module.exports = router
