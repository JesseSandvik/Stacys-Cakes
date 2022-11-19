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
          <Heading level={2}>booking policy</Heading>
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
        <article id="contracts">
          <Heading level={2}>contracts</Heading>
          <ul>
            <li>
              <p>
                Contracts & deposits must be receieved a minimum of two weeks
                prior to the event date.
              </p>
            </li>
            <li>
              <p>
                Contracts must be properly filled out upon submission. Failing
                to do so may result in possible delays, as well as the
                cancellation of an order.
              </p>
            </li>
          </ul>
        </article>
        <article id="deposits">
          <Heading level={2}>deposits</Heading>
          <ul>
            <li>
              <p>
                Contracts & deposits must be receieved a minimum of two weeks
                prior to the event date.
              </p>
            </li>
            <li>
              <p>We accept the following methods of payment for deposits:</p>
              <ul>
                <li>
                  <p>Credit Card</p>
                </li>
                <li>
                  <p>PayPal</p>
                </li>
                <li>
                  <p>Venmo</p>
                </li>
              </ul>
            </li>
          </ul>
        </article>
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
