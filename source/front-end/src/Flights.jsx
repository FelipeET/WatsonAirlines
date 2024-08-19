import React, { useState } from "react";
import { data } from "./data";
import "./Flights.css";
import { FlightsDetails } from "./FlightDetails";
import { Link } from "react-router-dom";

export const Flights = () => {
    const [openDetails, setOpenDetails] = useState(null); 

    const handleToggleDetails = (id) => {
        setOpenDetails(openDetails === id ? null : id); 
    };

    return (
        <div>
            <main>
                <h1>Flight Information</h1>
                {data.map((flight, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>     
                        <p><strong>Flight Number:</strong> {flight.FLIGHT_NUMBER}</p>
                        <p><strong>Origin Airport:</strong> {flight.ORIGIN_AIRPORT}</p>
                        <p><strong>Destination Airport:</strong> {flight.DESTINATION_AIRPORT}</p>
                        <button onClick={() => handleToggleDetails(flight._id)}>{openDetails === flight._id ? "Close Details" : "View Details"}</button>
                        {openDetails === flight._id && <FlightsDetails flight={flight} />}
                        <Link to="/purchase"> <button>Purchase</button></Link>
                    </div>
                ))}
            </main>
        </div>
    );
};
