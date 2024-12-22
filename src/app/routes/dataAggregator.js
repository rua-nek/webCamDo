const express = require('express');
const router = express.Router();
const dataAggregatorController = require('../controllers/DataAggregatorController.js');
router.get('/', dataAggregatorController.index);
module.exports = router;