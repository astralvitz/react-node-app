module.exports = app => {
    const tags = require("../controllers/tag.controller.js");
    var router = require("express").Router();
    // Create a Tag
    router.post("/", tags.createTag);
    // Retrieve all Tags
    router.get("/", tags.findAllTags);
    // Add a Tutorial to a Tag
    router.post("/addTut", tags.addTutorial);
      // Retrieve a single Tag with id
    router.get("/:id", tags.findOne);
    app.use('/api/tags', router);
  };