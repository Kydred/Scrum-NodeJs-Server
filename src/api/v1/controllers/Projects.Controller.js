const db = require.main.require("./src/config/databaseModels");
const Project = db.Projects;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a project
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save project in the database
  project
    .save(project)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the project."
      });
    });
};
  
  // Retrieve all projects from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
  console.log(req.auth)
  Project.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projects."
      });
    });
};

// Find a single project with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Project.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found project with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving project with id=" + id });
    });
};

// Update a project by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Project.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update project with id=${id}. Maybe project was not found!`
        });
      } else res.send({ message: "project was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating project with id=" + id
      });
    });
};

// Delete a project with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Project.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete project with id=${id}. Maybe project was not found!`
        });
      } else {
        res.send({
          message: "project was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete project with id=" + id
      });
    });
};

// Delete all projects from the database.
exports.deleteAll = (req, res) => {
  Project.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} projects were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all projects."
      });
    });
};

// Find all published projects
exports.findAllPublished = (req, res) => {
  Project.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projects."
      });
    });
};