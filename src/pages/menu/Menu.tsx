import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

function Menu(): React.ReactElement {
  return (
    <Main className="Menu">
      <Heading level={1}>Menu</Heading>
    </Main>
  );
}

export default Menu;
