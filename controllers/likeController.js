"use strict";

const likeModel = require("../models/likeModel");
const likes = likeModel.likes;

const like_create = async (req, res) => {

    console.log("likeController like_create", req.body);

    const id = await likeModel.insertLike(req);
    return res.json({id: id});
};
const get_all_post_likes = async (req, res) => {
    const like = await likeModel.getAllPostLikes(req.params.id);
    res.json(like);
};

module.exports = {
    like_create,
    get_all_post_likes
};



