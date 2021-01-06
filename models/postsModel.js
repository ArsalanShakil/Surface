"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllPosts = async () => {
    try {
        const [rows] = await promisePool.execute(`SELECT post_id, User_posts.owner_id, image_url, user_id, caption, User.name 
              AS ownername FROM User_posts LEFT JOIN User ON owner_id = user_id`);
        return rows;
    } catch (e) {
        console.error('postsModel:', e.message);
    }
};

const getPost = async (id) => {
    try {
        console.log('postsModel getPosts', id);
        const [rows] = await promisePool.execute(
            'SELECT post_id, User_posts.owner_id, image_url, caption, User.name' +
            '              AS ownername FROM User_posts LEFT JOIN User ON owner_id = user_id WHERE post_id = ?', [id]);
        return rows[0];
    } catch (e) {
        console.error('postsModel:', e.message);
    }
};

const insertPost = async (req) => {
    try {
        const [rows] = await promisePool.execute(
            'INSERT INTO User_posts ( owner_id, caption) VALUES (?, ?);',
            [
                req.body.owner_id,
                req.body.caption
            ]);
        return rows.insertId;
    }
    catch (e) {
        console.error('postsModel insertPost:', e);
        return 0;
    }
};

const updatePostImage = async (imageUrl, post_id) => {
    try {
        const [rows] = await promisePool.execute(
            'UPDATE User_posts SET image_url = ? WHERE post_id = ?;',
            [
                imageUrl,
                post_id
            ]);
        return rows;
    }
    catch (e) {
        return false;
    }
};


module.exports = {
    getAllPosts,
    getPost,
    insertPost,
    updatePostImage
};
