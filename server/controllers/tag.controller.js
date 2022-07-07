const db = require("../models");
const Tag = db.tags;
const Tutorial = db.tutorials;

/* TAGS */

// Create and Save new Tag
exports.createTag = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tag
  const tag = {
    name: req.body.name
  };
  // Save Tag in the database
  Tag.create(tag)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tag."
      });
    });
};

// Retrieve all Tags from the database.
exports.findAllTags = (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Tutorial,
        as: "tutorials",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        }
      },
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a Tag for a given Tag id
exports.findOne = (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Tutorial,
        as: "tutorials",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        }
      },
    ]
  })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Did not find tag"
        });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Add a Tutorial to a Tag
exports.addTutorial = (req, res) => {
  // Validate request
  if (!req.body.tagId) {
    res.status(400).send({
      message: "tagId can not be empty!"
    });
    return;
  }

  Tag.findByPk(req.body.tagId)
    .then(tag => {
      if (!tag) {
        res.status(404).send({
          message: "Tag not found!"
        });
      }
      
      Tutorial.findByPk(req.body.tutorialId)
        .then(tutorial => {
          if (!tutorial) {
            res.status(404).send({
              message: "Tutorial not found!"
            });
          }

          tag.addTutorial(tutorial);
          res.send(tag);
        });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding tutorial to a tag."
      });
    });
};