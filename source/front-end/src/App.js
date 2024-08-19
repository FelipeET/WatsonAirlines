import './App.css';
import {Navbar} from './Navbar';
import {Footer} from './Footer';
import './Landing.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './Landing';
import { Flights } from './Flights';
import { FlightsDetails } from './FlightDetails';
import { Purchase } from './Purchase';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/flights/details/:FLIGHT_NUMBER" element={<FlightsDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
