require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./connection');
const flightsController = require('./controllers/flightsController');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenido a la API' });
});

app.get('/api/flights', flightsController.getFlights);

connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
