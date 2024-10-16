const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/',authController.login);
router.get('/protected', authController.protected);

module.exports  = router;


