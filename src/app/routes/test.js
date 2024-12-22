const express = require('express');
const router = express.Router();
const TestController = require('../controllers/TestConTroller.js');

router.get('/', TestController.index);
module.exports = router;