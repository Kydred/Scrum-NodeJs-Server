'use strict';
module.exports = function(app, auth) {
    //require('./exampleProducts.Routes')(app);
    require('./Projects.Routes')(app, auth);
    //require('./Tasks.Routes')(app);
};

