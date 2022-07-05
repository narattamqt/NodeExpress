const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    var name = "narattam"
    res.render("index", {
        name
    })
})


module.exports = router