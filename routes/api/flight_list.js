const express = require('express');
const router = express.Router();

// Db connection
const db = require('../../db/connection')

// @route   GET api/aircraft_list
// @desc    GET All Items
// @access  Public
router.get('/', (req, res) => {
    const query = "SELECT * FROM flight_list;"
    db.query(query, (err, result) => {
        res.send(result);
    })
})

// @route   GET api/aircraft_list
// @desc    GET By id
// @access  Public
router.get('/:id', (req, res) => {
    const query = `SELECT * FROM flight_list where flight_id=${req.params.id};`
    db.query(query, (err, result) => {
        res.send(result[0]);
    })
})

// @route   POST api/aircraft_list
// @desc    Insert a new data
// @access  Public
router.post('/', (req, res) => {
    const query = `INSERT INTO flight_list (flight_id, airlines_id, flight_name, departure_airport_id, arrival_airport_id, departure_datetime, arrival_datetime, available_seats, price) VALUES(?,?,?,?,?,?,?,?,?)`
    db.query(query,[
        req.body.flight_id, 
        req.body.airlines_id,
        req.body.flight_name,
        req.body.departure_airport_id,
        req.body.arrival_airport_id,
        req.body.departure_datetime,
        req.body.arrival_datetime,
        req.body.available_seats,
        req.body.price,
    ], 
    (err, result) => {
        if(err) res.send(err);
        res.send(result);
    })
})

module.exports = router;