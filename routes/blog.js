const express = require("express");
const mongodb = require("mongodb");

const db = require("../data/database");

const ObjectId = mongodb.ObjectId;

const router = express.Router();
// Redirect to /posts
router.get("/", function (req, res) {
  res.redirect("/posts");
});
// View All Posts
router.get("/posts", async function (req, res) {
  const posts = await db
    .getDb()
    .collection("posts")
    .find({})
    .project({ title: 1, summary: 1, "author.name": 1 })
    .toArray();
  res.render("posts-list", { posts: posts });
});
// Render New Post Page
router.get("/new-post", async function (req, res) {
  const authors = await db.getDb().collection("authors").find().toArray();
  res.render("create-post", { authors: authors });
});
// Create A New Post
router.post("/posts", async function (req, res) {
  const authorId = new ObjectId(req.body.author.trim());
  const author = await db
    .getDb()
    .collection("authors")
    .findOne({ _id: authorId });
  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  };
  const result = await db.getDb().collection("posts").insertOne(newPost);
  console.log(result);
  res.redirect("/posts");
});
// View post in details views
router.get("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  console.log(postId);
  // const authorId = new ObjectId(req.body.id.trim())
  const post = await db
    .getDb()
    .collection("posts")
    .findOne({ _id: new ObjectId(postId) }, { summary: 0 });
  if (!post) {
    return res.status(404).render("404");
  }
  res.render("post-detail", { post: post });
});

// Export router module
module.exports = router;
