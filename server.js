const express = require('express');
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require('jwks-rsa');
const bodyParser = require('body-parser');
require('dotenv').config();

// -- server basic setup ----
let app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// -- Auth setup ----
const issuer = process.env.IDENTITYURI;
const auth = jwt({
    // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 2,
        jwksUri: `${issuer}/.well-known/openid-configuration/jwks`
    }),

    // Validate the audience and the issuer.
    //audience: 'api1',
    issuer: null,
    algorithms: [ 'RS256' ]
});
// // apply all
// app.use(jwt({...}));

// -- DB setup ----
const db = require("./src/config/databaseModels");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// -- Route setup ----
let routes = require('./src/config/routes'); //importing route
routes(app, auth);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// -- Port setup ----
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
