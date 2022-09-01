var { expressjwt: jwt } = require("express-jwt");

const { authUser } = require('../middlewares/auth')

module.exports = (app, auth) => {
    const ctrl = require("../controllers/Projects.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ctrl.create);
  
    // Retrieve all Tutorials
    router.get("/", auth, authUser, ctrl.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", ctrl.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ctrl.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ctrl.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ctrl.delete);
  
    // Create a new Tutorial
    router.delete("/", ctrl.deleteAll);
  
    app.use("/api/projects", router);
  };