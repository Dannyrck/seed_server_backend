const express = require('express');
const registrationController = require('../controllers/resgistration_controller');

let router = express.Router();

router.get('/signup', registrationController.new);
router.route('/user').post(registrationController.postUsuario)

module.exports = router;