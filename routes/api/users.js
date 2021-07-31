const express = require('express');
const router = express.Router()
const { signup} = require('../../controllers/users');

//Public
router.post('/signup', signup)




//Protected (authorization?)


module.exports = router;