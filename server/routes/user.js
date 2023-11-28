const express = require("express");
const router = express.Router();
const {
   loginuser,

} = require("../Controllers/userCtrl");

router.post("/login",loginuser);

router.post("/register")





module.exports = router;