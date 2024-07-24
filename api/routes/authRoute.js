const express = require('express');
const router = express();

router.use(express.json());

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:true }));

const userController = require('../controllers/userController');

router.get('/mail-verification', userController.mailVerification);
router.get('/reset-password', userController.resetPassword);

module.exports = router;