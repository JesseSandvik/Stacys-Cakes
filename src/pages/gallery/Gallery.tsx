import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

function Gallery(): React.ReactElement {
  return (
    <Main className="Gallery">
      <Heading level={5}>Gallery</Heading>
    </Main>
  );
}

export default Gallery;
