import React from "react";
import SearchBar from "./SearchBar";
import { data } from "./data";

export const Landing = () => {
  return (
    <div>
      <main>
        <section id="home" className="hero-section">
          <h1>Welcome to Watson Airlines</h1>
          <p>Discover what we have to offer.</p>
          <a href="flights" className="cta-button">
            Flights
          </a>
        </section>
        <section>
          <SearchBar flights={data}></SearchBar>
        </section>
        <section className="info-section">
          <h2>About Us</h2>
          <p>
          Watson Airlines is a one of the largest airlines in North America. With over 30 years of history, we connect people to opportunities while expanding the understanding of our planet and the people within it. We offer our one-of-a-kind value and Hospitality at over 50 airports across more than 15 countries. In addition, we are members of the International Air Transport Association (IATA), a trade association that represents over 300 airlines, equivalent to about 83% of total air traffic. This allows us to operate safely, securely, efficiently, and economically under clearly defined rules.<br/>We are pioneers in the usage of technology, and actively advocate for its usage to improve our customer's experience.
          </p>
        </section>
        <section className="info-section">
          <h2>Business Challenge</h2>
          <p>
          Watson Airlines wishes to provide its clients with a better user experience, focused on ease of use and customer self-service. One of their biggest difficulties at the moment is providing information to passengers about existing flights, departure times, and possible delays. Clients find obtaining this information is difficult, and Watson Airlines is unable to provide efficient-enough assistance with their existing personnel.<br/> To solve this problem, Watson Airlines wishes to re-design their website, adding capabilities that allow their clients to search and book flights on their own, reducing friction and offering a better experience. <br/>To develop this solution, Watson Airlines is willing to provide access to a database containing information on flights from both its company and others as well as their corresponding airports, both shared by IATA as part of their alliance.
          </p>
        </section>
        <section className="contact-section">
          <h2>Contact</h2>
          <p>We'd love to hear from you!</p>
        </section>
      </main>
    </div>
  );
};
