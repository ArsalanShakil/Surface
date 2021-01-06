"use strict";
// likeRoute

const express = require('express');
const {body} = require('express-validator');
const likeController = require('../controllers/likeController');
const router = express.Router();
const {like_create} = require("../controllers/likeController");

router.get("/all/:id", likeController.get_all_post_likes);

router.post('/create',
    [
        body('post_id', 'must be a number').isLength({min: 1}).isNumeric(),
        body('owner_id', 'must be a number').isLength({min: 1}).isNumeric(),
    ],
    likeController.like_create);
module.exports = router;


