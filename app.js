"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("./utils/pass.js");
const userRoute = require("./routes/userRoute.js");
const authRoute = require("./routes/authRoute.js");
const postsRoute = require("./routes/postsRoute.js");
const likeRoute = require("./routes/likeRoute.js");
const app = express();


app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static('Frontend'));
app.use('/uploads', express.static('Frontend/uploads'));

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'production') {
    require('./production')(app, process.env.PORT);
} else {
    require('./localhost')(app, process.env.HTTPS_PORT, process.env.HTTP_PORT);
}

//routes
app.use("/auth", authRoute);
app.use("/user", passport.authenticate('jwt', {session: false}), userRoute);
app.use("/post",postsRoute);
app.use("/like",likeRoute);

