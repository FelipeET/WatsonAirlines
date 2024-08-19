import React from "react";
import './Purchase.css';
import { Link } from "react-router-dom";

export const Purchase = () => {

  return (
    <div className="error-container">
        <h1>Oops!</h1>
        <p>Something went wrong on our end.</p>
        <p>We're working to fix the issue and will be back online shortly.</p>
        <p>If you need immediate assistance, please contact our support team.</p>
        <Link to="/flights">
            <a href="" className="contact-link">Contact Support</a>
        </Link>
    </div>
  );
};
