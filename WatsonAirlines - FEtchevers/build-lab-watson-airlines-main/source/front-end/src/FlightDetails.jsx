import React from "react";

export const FlightsDetails = ({flight}) => {

  return (
    <div style={{ padding: "20px" }}>
      <h1>Flight Details</h1>
      <p><strong>Airline:</strong> {flight.AIRLINE}</p>
      <p><strong>Departure Date:</strong> {new Date(flight.DEPARTURE_DATE).toLocaleString()}</p>
      <p><strong>Arrival Date:</strong> {new Date(flight.ARRIVAL_DATE).toLocaleString()}</p>
      <p><strong>Cancelled:</strong> {flight.CANCELLED ? "Yes" : "No"}</p>
    </div>
  );
};
