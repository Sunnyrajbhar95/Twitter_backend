const express = require("express");

const router = express.Router();

const { CreateTweet,getTweet } = require("../Controller/index");

const {tweetlike}=require("../Controller/like-controller")
const {PostComment}=require("../Controller/comment-controller")
const { SignUp,login}=require("../Controller/user-controller")
const isAuth=require('../middleware/index')


router.post("/tweet",isAuth, CreateTweet);
router.post("/like",isAuth,tweetlike)
router.post("/comment",isAuth,PostComment)
router.get("/getTweet/:id",getTweet)
router.post("/signup",SignUp)
router.get("/login",login)
// router.get('/dummy',isAuth,dummy)


module.exports = router;
