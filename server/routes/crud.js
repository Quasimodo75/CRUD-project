const express = require("express");
const router = express.Router();
const {create,read,update,  



} = require("../Controllers/crud");


router.post("/create", create);
router.get("/items" , read);
router.put("/items/:id",update);






module.exports = router; 