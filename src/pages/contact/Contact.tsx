import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

import "./Contact.css";

function Contact(): React.ReactElement {
  return (
    <Main className="Contact">
      <Heading level={1}>Contact Us</Heading>
      <section className="Contact-left-panel">
        <article id="booking-policy">
          <Heading level={3}>booking policy</Heading>
          <ul>
            <li>
              <p>
                All orders are taken on a first come/first serve basis & are
                subject to availability.
              </p>
            </li>
            <li>
              <p>
                Orders requested within two weeks of the event date cannot be
                guaranteed for your specific date. In addition, orders taken
                within two weeks of the event date are subject to an additional
                expedition fee.
              </p>
            </li>
            <li>
              <p>Dates cannot be held!</p>
            </li>
            <li>
              <p>
                Orders & dates can only be guaranteed with a deposit & completed
                contract.
              </p>
            </li>
          </ul>
        </article>
        <article id="contracts" />
        <article id="deposits" />
        <article id="cancellations" />
        <article id="delivery" />
      </section>
      <section className="Contact-right-panel">
        <article id="contact-info" />
      </section>
    </Main>
  );
}

export default Contact;
