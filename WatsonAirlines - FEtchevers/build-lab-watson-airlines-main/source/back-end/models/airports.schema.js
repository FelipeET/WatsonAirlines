const mongoose = require('mongoose');

const airports_schema = new mongoose.Schema({
  IATA_CODE : String,
  AIRPORT : String,
  CITY : String,
  STATE : String,
  COUNTRY : String,
});

const airports = mongoose.model("airports", airports_schema);

module.exports = airports;