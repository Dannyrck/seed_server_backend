const express = require('express');
const registrationController = require('../controllers/resgistration_controller');

let router = express.Router();

router.get('/signup', registrationController.new);

module.exports = router;