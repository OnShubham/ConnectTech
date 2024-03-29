const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const User = require("../../models/Users");
const Profile = require("../../models/Profile");

// @route   POST api/Post
// @desc    Create a post
// @access  Private
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 400 Bad Request
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();
      // 201 Created
      res.json(post);
    } catch (err) {
      console.error(err.message);
      // 500 Internal Server Error
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/Post
// @desc    Get all posts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    // 500 Internal Server Error
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/Post/:id
// @desc    Delete a post by ID
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      // 404 Not Found
      return res.status(404).json({ msg: "Post not found" });
    }

    await post.remove();

    // Return a success message
    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      // 404 Not Found
      return res.status(404).json({ msg: "Post not found" });
    }
    // 500 Internal Server Error
    res.status(500).send("Server Error");
  }
});

module.exports = router;
