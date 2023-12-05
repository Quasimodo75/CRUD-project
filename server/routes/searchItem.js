const express = require('express');
const itemController = require('../Controllers/search');

const router = express.Router();

// Route for searching items
router.get('/search', itemController.searchItems);

module.exports = router;