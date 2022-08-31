'use strict';
module.exports = function(app, auth) {
     // importing route each api version
    require('../api/v1/routes')(app, auth);
};
