const express = require("express");

const router = express.Router();

// controllers
const { postBlog, blogs,blog } = require("../controllers/blog");


router.post("/post-blog", postBlog);
router.get("/blogs", blogs);
router.get("/blog/:id",blog);

module.exports = router;