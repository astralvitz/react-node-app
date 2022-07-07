module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const tags = require("../controllers/tag.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tutorials.create);
    // Create a new Comment
    router.post("/comment", tutorials.createComment);
    // Create a new Tag
    router.post("/tag", tags.createTag);
    // Add a Tutorial to a Tag
    router.post("/tag/addTut", tags.addTutorial);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
    // Retrieve a single Comment with id
    router.get("/comment/:id", tutorials.findOneComment);
    // Retrieve all Tags
    router.get("/tag", tags.findAllTags);
      // Retrieve a single Tag with id
    router.get("/tag/:id", tags.findOneTag);
     // Retrieve a single Tutorial with id
     router.get("/:id", tutorials.findOne);
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
    app.use('/api/tutorials', router);
  };