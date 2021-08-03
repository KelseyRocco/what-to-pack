const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

//Public
router.post('/signup', usersCtrl.signup)
router.post('/login', usersCtrl.login)




//Protected (authorization?)
router.use(require('../../config/auth'));


module.exports = router;