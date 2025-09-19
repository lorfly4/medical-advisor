const path = require('path');
const bcrypt = require('bcrypt');
const express = require('express');
const db = require('../db'); // Import koneksi database
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: path.join(__dirname, '../public/uploads/') });

router.get('/', async (req, res) => {
    res.render('landing');
});

module.exports = router;