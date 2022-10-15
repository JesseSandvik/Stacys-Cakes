import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

import "./About.css";

function About(): React.ReactElement {
  return (
    <Main className="About">
      <div className="About-heading">
        <Heading level={1}>About Us</Heading>
      </div>
      <div className="About-body" />
    </Main>
  );
}

export default About;
