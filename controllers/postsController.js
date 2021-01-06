"use strict";
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config/aws_config.json');
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const postsModel = require("../models/postsModel");
const posts = postsModel.posts;


const post_create = async (req, res) => {
    const post_id = await postsModel.insertPost(req);
    const photo_key = req.body.owner_id + '_' + post_id;
    const picture_url = 'https://surface-met.s3.eu-north-1.amazonaws.com/' + photo_key

    const buf = Buffer.from(req.body.image, 'base64');
    const data = {
        Bucket: 'surface-met',
        Key: photo_key,
        Body: buf,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        ACL: 'public-read'
    };

    s3.putObject(data, async function (err, data) {
        if (err) {
            console.log('Error uploading data: ' + err);
        } else {
            const updatedPost = await postsModel.updatePostImage(picture_url, post_id);
            const post = await postsModel.getPost(post_id);
            post.success = true;
            res.send(post);
        }
    });

};
const get_all_posts = async (req, res) => {
    const post = await postsModel.getAllPosts();
    res.json(post);
};

const post_get_by_id = async (req, res) => {
    console.log("postsController: http get cat with path param", req.params);
    const post = await postsModel.getPost(req.params.id);
    res.json(post);
};

module.exports = {
    post_create,
    post_get_by_id,
    get_all_posts,
}
