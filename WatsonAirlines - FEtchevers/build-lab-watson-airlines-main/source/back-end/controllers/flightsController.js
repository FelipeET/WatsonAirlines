const Flight = require('../models/flights.schema');

const getFlights = async (req, res) => {
  try {
    console.log("Testeando")
    const flights = await Flight.find();
    console.log(flights);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getFlights,
};
