const { MongoClient } = require("mongodb");

var url = process.env.DBCONNECTION || "mongodb://localhost:27017";

const client = new MongoClient(url);
const database = client.db('nodejsmongo');

module.exports = database

//Create a database named "nodejsmongo":
// MongoClient.connect(url + "/nodejsmongo", function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("nodejsmongo");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });