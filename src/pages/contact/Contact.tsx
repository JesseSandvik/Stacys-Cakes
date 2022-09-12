import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

import "./Contact.css";

function Contact(): React.ReactElement {
  return (
    <Main className="Contact">
      <Heading level={1}>Contact</Heading>
      <section className="Contact-left-panel" />
      <section className="Contact-right-panel" />
    </Main>
  );
}

export default Contact;
