const router = require("express").Router();

router.get("", (req, res) => {
  return res.render("api");
})

module.exports = router;