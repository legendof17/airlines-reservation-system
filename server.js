const express = require('express');
const config = require('config');

const flight_list = require('./routes/api/flight_list')

// Middlewares
const app = express();
app.use(express.json());

// Use routes
app.use('/api/flight_list', flight_list)

const port = config.get('app.port') || process.env.port;

app.listen(port, () => {
    console.log('server started on port ' + port);
})