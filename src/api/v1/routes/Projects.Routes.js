module.exports = app => {
    const projectCtrl = require("../controllers/Projects.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", projectCtrl.create);
  
    // Retrieve all Tutorials
    router.get("/", projectCtrl.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", projectCtrl.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", projectCtrl.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", projectCtrl.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", projectCtrl.delete);
  
    // Create a new Tutorial
    router.delete("/", projectCtrl.deleteAll);
  
    app.use("/api/projects", router);
  };