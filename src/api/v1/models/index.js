
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DBCONNECTION || "mongodb://localhost:27017";
db.Projects = require("./Projects.Model.js")(mongoose);
db.Tasks = require("./Tasks.Model.js")(mongoose);

module.exports = db;