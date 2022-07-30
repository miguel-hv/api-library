const express = require('express');
const controller = require('../controllers/book.controller');
const router = express.Router();


router.post("/id", controller.bookPost);

module.exports = router;