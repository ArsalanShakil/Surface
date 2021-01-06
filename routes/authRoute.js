'use strict';
const express = require('express');
const {body} = require('express-validator')
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/',
    [
        body('name', 'Minimum lenth 3 character').isLength({min: 1}),
        body('email', 'is not valid email').isEmail(),
        body('passwd', 'password: minimum length 8 characters, at least one capital letter').matches('(?=.*[A-Z]).{8,}'),
    ],
    authController.user_create);
module.exports = router;
