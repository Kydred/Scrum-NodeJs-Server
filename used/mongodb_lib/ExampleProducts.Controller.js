'use strict'

//const util = require('util')
//const mysql = require('mysql')
const db = require('../db')
const tableName = "Products";

module.exports = {
    get: (req, res) => {

        const db_products = db.collection(tableName);
        const query = { };
        const options = {
            // sort returned documents in ascending order by name (A->Z)
            sort: { name: 1 },
            // Include only the `name` and `price` fields in each returned document
            projection: { _id: 1, name: 1, price: 1 },
        };

        db_products.find(query, options).toArray(function (err, docs) {
            if (err) throw err;
            //console.log(docs);
            res.json(docs)
        });; 

        //db.close();
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE products SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO products SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
