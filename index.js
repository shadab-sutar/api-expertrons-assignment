const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(encodeURI(config.dbPath), { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('Connected to mongodb local instance...');
});

mongoose.connection.on('error', function () {
    console.log('error connecting to mongodb local instance...');
});

require('./api/routes')(app);

app.listen(config.port, () => {
    console.log(`Listening to port: ${config.port}`);
});