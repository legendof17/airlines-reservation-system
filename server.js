const express = require('express');
const mysql = require('mysql');
const config = require('config');

const app = express();

app.use(express.json());

const dbdetails = config.get('db');

const db = mysql.createPool(dbdetails);

app.get('/api/aircraft_list', (req, res) => {
    const getlist = "SELECT * FROM aircraft_list;"
    db.query(getlist, (err, result) => {
        res.send(result);
    })
})

app.get('/api/aircraft_list/:id', (req, res) => {
    const getlist = `SELECT * FROM aircraft_list where aircraft_id=${req.params.id};`
    db.query(getlist, (err, result) => {
        res.send(result);
    })
})

const port = config.get('app.port') || process.env.port;

app.listen(port, () => {
    console.log('server started on port ' + port);
})