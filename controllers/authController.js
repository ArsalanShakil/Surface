'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');
const userModel = require('../models/userModel')
const {validationResult} = require('express-validator');
const login = (req, res) => {
    // TODO: add passport authenticate
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log('login', user);
        delete user.password;
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user: user,
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            // generate a signed son web token with the contents of user object and return it in the response
            const token = jwt.sign(user, 'darshils');
            return res.json({user, token});
        });
    })(req, res);
};
const logout = (req, res) => {
    req.logout();
    res.json({message: 'Successfully logout'});
};

const user_create = async (req, res) => {
    //here we will create a user with data coming from req...
    console.log("userController user_create", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const id = await userModel.addUser(req);
    const user = await userModel.getUser(id);
    const token = jwt.sign(JSON.stringify(user), 'darshils');
    return res.json({user, token});
};
module.exports = {
    login,
    logout,
    user_create
};
