const config = require('config')
const mysql = require('mysql');

// Db config
const dbdetails = config.get('db');

//Db connection
const db = mysql.createPool(dbdetails);

module.exports = db;