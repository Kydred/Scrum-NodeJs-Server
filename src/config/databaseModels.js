
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DBCONNECTION || "mongodb://localhost:27017";

// -- install v1 models
db.Notifications = require("../api/v1/models/Notifications.Model.js")(mongoose);

db.Categories = require("../api/v1/models/Categories.Model.js")(mongoose);
db.FlowStatuses = require("../api/v1/models/FlowStatuses.Model.js")(mongoose);
db.IssueTypes = require("../api/v1/models/IssueTypes.Model.js")(mongoose);

db.Projects = require("../api/v1/models/Projects.Model.js")(mongoose);
db.ProjectBoards = require("../api/v1/models/ProjectBoards.Model.js")(mongoose);

db.Sprints = require("../api/v1/models/Sprints.Model.js")(mongoose);
db.Tasks = require("../api/v1/models/Tasks.Model.js")(mongoose);
db.TaskLogs = require("../api/v1/models/TaskLogs.Model.js")(mongoose);
db.TaskComments = require("../api/v1/models/TaskComments.Model.js")(mongoose);

db.User_Project = require("../api/v1/models/User_Project.Model.js")(mongoose);

module.exports = db;