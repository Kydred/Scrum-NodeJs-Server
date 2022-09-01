var { expressjwt: jwt } = require("express-jwt");

module.exports = (app, auth) => {
    const ctrl = require("../controllers/Sprints.controller.js");
  
    var router = require("express").Router();
  
    // // Retrieve all Tutorials
    // router.get("/", auth, ctrl.findAll);

    // // Create a new Tutorial
    // router.post("/", ctrl.create);
  
    // // Update a Tutorial with id
    // router.put("/:id", ctrl.update);
  
    // // Create a new Tutorial
    // router.delete("/", ctrl.deleteAll);
  
    app.use("/api/Sprints", router);
  };