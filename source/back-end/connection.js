const mongoose = require('mongoose');
const Flights = require('./models/flights.schema.js');
const Airports = require('./models/airports.schema.js');
const Airlines = require('./models/airlines.schema.js');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, ssl: true, sslValidate: false});
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
