import React, { useState } from 'react';
import './SearchBar.css';
import { formatDate } from './helpers/formatDate';

const SearchBar = ({ flights }) => {
    const [filters, setFilters] = useState({
        origin: '',
        destination: '',
        startDate: '',
        endDate: '',
        flightId: '',
    });

    const [filteredFlights, setFilteredFlights] = useState(flights);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        console.log(name,value,filters)
    };

    const filterFlights = () => {
        let result = flights;
        console.log(flights);
        if (filters.origin && filters.destination) {
            result = result.filter(flight =>
                flight.ORIGIN_AIRPORT.includes(filters.origin) &&
                flight.DESTINATION_AIRPORT.includes(filters.destination)
            );
            
            if (filters.startDate && filters.endDate) {
                result = result.filter(flight => {
                    const flightDate = new Date(flight.DEPARTURE_DATE);
                    return flightDate >= new Date(filters.startDate) && flightDate <= new Date(filters.endDate);
                });
            }
        }

        if (filters.flightId) {
            result = result.filter(flight => flight._id.includes(filters.flightId));
        }

        setFilteredFlights(result);
    };

    return (
        <div class="main-container">
            <h2 class= "title">Search Flights</h2>
            <form class="form" onSubmit={(e) => { e.preventDefault(); filterFlights(); }}>
                <div>
                    <label class="label">Origin:</label>
                    <input
                        type="text"
                        name="origin"
                        value={filters.origin}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label class="label">Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={filters.destination}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label class="label">Departure:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={filters.startDate}
                        onChange={handleChange}
                        disabled={!filters.origin || !filters.destination}
                    />
                </div>
                <div>
                    <label class="label">Arrival:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={filters.endDate}
                        onChange={handleChange}
                        disabled={!filters.origin || !filters.destination}
                    />
                </div>
                <div>
                    <label class="label">Flight ID:</label>
                    <input
                        type="text"
                        name="flightId"
                        value={filters.flightId}
                        onChange={handleChange}
                    />
                </div>
                <button class="button" type="submit">Search</button>
            </form>

            <h3 class="h3">Flights:</h3>
            <ul class="ul">
                {filteredFlights && filteredFlights.length > 0 ? (
                    filteredFlights.map((flight, index) => (
                        <li key={index}>
                            Flight {flight.FLIGHT_NUMBER}: {flight.ORIGIN_AIRPORT} → {flight.DESTINATION_AIRPORT} on {formatDate(flight.DEPARTURE_DATE)}
                        </li>
                    ))
                ) : (
                    <p class="p">No se encontraron vuelos</p>
                )}
            </ul>
        </div>
    );
};

export default SearchBar;