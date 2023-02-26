module.exports = app => {
    const posts = require("../controllers/post.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Post
    router.post("/", posts.create);
  
    // Retrieve all posts
    router.get("/", posts.findAll);
  
    // Retrieve a single posts with id
    router.get("/:id", posts.findOne);
  
    // Update a posts with id
    router.put("/:id", posts.update);
  
    // Delete a posts with id
    router.delete("/:id", posts.delete);
    
    app.use("/api/posts", router);
  };
  