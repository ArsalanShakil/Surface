"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllPostLikes = async (post_id) => {
    try {
        const [rows] = await promisePool.execute('SELECT like_id, owner_id, post_id FROM Likes  WHERE post_id = ?', [post_id]);
        return rows;
    } catch (e) {
        console.error('LikeModel:', e.message);
    }
};

const insertLike = async (req) => {
    try {
        const [rows] = await promisePool.execute(
            'INSERT INTO Likes ( owner_id, post_id) VALUES (?, ?);',
            [
                req.body.owner_id,
                req.body.post_id
            ]);
        return rows.insertId;
    }
    catch (e) {
        console.error('likeModel insertLike:', e);
        return 0;
    }
};



module.exports = {
    getAllPostLikes,
    insertLike,
};



