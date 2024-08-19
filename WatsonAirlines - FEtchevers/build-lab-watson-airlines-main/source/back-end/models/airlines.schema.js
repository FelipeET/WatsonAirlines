const mongoose = require('mongoose');

const airlines_schema = new mongoose.Schema({
  IATA_CODE : String,
  AIRLINE : String,
});

const airlines = mongoose.model("airlines", airlines_schema);

module.exports = airlines;