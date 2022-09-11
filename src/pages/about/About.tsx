import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

function About(): React.ReactElement {
  return (
    <Main className="About">
      <Heading level={1}>About</Heading>
    </Main>
  );
}

export default About;
