const express = require("express");
const router = express.Router();
const {create, read} = require("../Controllers/crud");


router.post("/create", create);
router.get("/items" , read)



module.exports = router; 