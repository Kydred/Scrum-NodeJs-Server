'use strict';
module.exports = function(app, auth) {
    require('./Projects.Routes')(app, auth);
    //require('./Tasks.Routes')(app, auth);
    //require('./Categories.Routes')(app, auth);
    //require('./FlowStatuses.Routes')(app, auth);
    //require('./IssueTypes.Routes')(app, auth);
    //require('./Notifications.Routes')(app, auth);
    //require('./ProjectBoards.Routes')(app, auth);
    //require('./Sprints.Routes')(app, auth);
    //require('./TaskComments.Routes')(app, auth);
    //require('./TaskLogs.Routes')(app, auth);
    //require('./User_Project.Routes')(app, auth);
};

