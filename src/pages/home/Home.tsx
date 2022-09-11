import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

import "./Home.css";

function Home(): React.ReactElement {
  return (
    <Main className="Home">
      <section className="Home-body-greeting">
        <Heading level={1}>Experience the magic!</Heading>
        <p>
          Stacy&apos;s custom <em>handmade</em> cakes, cupcakes, & treats are
          prepared <em>fresh</em> from her kitchen, & delivered straight to your
          doorstep!
        </p>
      </section>
    </Main>
  );
}

export default Home;
