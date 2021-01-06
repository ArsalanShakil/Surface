"use strict";

const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async () => {
    try {
        const [rows] = await promisePool.query(
            "SELECT User.user_id, User.name, User.email , User.password FROM User"
        );
        return rows;
    } catch (e) {
        console.log("userModel:", e.message);
    }
};

const getUser = async (id) => {
    try {
        console.log("userModel getUser", id);
        const [rows] = await promisePool.execute(
            "SELECT * FROM User WHERE user_id = ?",
            [id]
        );
        return rows[0];
    } catch (e) {
        console.log("userModel:", e.message);
    }
};

const getUserLogin = async (params) => {
    try {
        console.log(params);
        const [rows] = await promisePool.execute(
            'SELECT * FROM User WHERE email = ?;',
            params);
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
};

const addUser = async (req) => {
    try {
        const [rows] = await promisePool.query("INSERT INTO User(name, email, password) VALUES(?, ?, ?);",
            [req.body.name, req.body.email, req.body.passwd]);
        console.log('userModel add:', rows);
        return rows.insertId;
    } catch (e) {
        console.error("userModel adduser:", e);
        return 0;
    }
};

const updateUser = async (id, req) => {
    try {
        const [rows] = await promisePool.query('UPDATE User SET name = ?, email = ?, password = ?, WHERE user_id = ?;',
            [req.body.name, req.body.email, req.body.passwd, id]);
        console.log('userModel update:', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        return false;
    }
};


module.exports = {
    getAllUsers,
    getUser,
    getUserLogin,
    addUser,
    updateUser
};
