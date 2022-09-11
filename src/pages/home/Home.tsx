import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

function Home(): React.ReactElement {
  return (
    <Main className="Home">
      <Heading level={1}>Experience the magic!</Heading>
    </Main>
  );
}

export default Home;
