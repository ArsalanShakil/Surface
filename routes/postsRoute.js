"use strict";
// postsRoute

const express = require('express');
const {body} = require('express-validator');
const postsController = require('../controllers/postsController');
const router = express.Router();
const {post_create} = require("../controllers/postsController");

router.get("/all", postsController.get_all_posts);

router.post('/create',
    [
        body('owner_id', 'must be a number').isLength({min: 1}).isNumeric(),
        body('image', 'must be an image'),
        body('caption', 'required'),
    ],
    postsController.post_create);
module.exports = router;
