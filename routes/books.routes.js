const express = require('express');
const controller = require('../controllers/books.controller');
const router = express.Router();


router.get("/", controller.booksGet);

module.exports = router;