const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeConTroller.js');
router.get('/home', HomeController.home);
router.post('/login', HomeController.handleLogin);
router.get('/', HomeController.home);
module.exports = router;