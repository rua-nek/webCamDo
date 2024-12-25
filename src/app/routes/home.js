const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const HomeController = require('../controllers/HomeConTroller.js');

// Cấu hình multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.post('/home', HomeController.handleLogin);
router.get('/home/addData', HomeController.addData);
router.post('/addData', upload.single('HinhAnh'), HomeController.handleAddData);
router.get('/', HomeController.home);

module.exports = router;