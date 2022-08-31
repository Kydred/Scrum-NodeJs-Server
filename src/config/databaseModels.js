
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DBCONNECTION || "mongodb://localhost:27017";

// -- install v1 models
db.Projects = require("../api/v1/models/Projects.Model.js")(mongoose);
db.Tasks = require("../api/v1/models/Tasks.Model.js")(mongoose);

module.exports = db;