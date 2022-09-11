import React from "react";

import Button from "../../components/atoms/button/Button";
import Heading from "../../components/atoms/heading/Heading";
import Main from "../../components/organisms/main/Main";

import "./Home.css";

function Home(): React.ReactElement {
  return (
    <Main className="Home">
      <section className="Home-body-greeting">
        <div className="heading">
          <Heading level={1}>Experience The Magic!</Heading>
        </div>
        <div className="body">
          <p>
            Stacy&apos;s custom <em>handmade</em>{" "}
            <span className="text-accent">cakes</span>,{" "}
            <span className="text-accent">cupcakes</span>, &{" "}
            <span className="text-accent">treats</span> are prepared{" "}
            <em>fresh</em> from her kitchen, & delivered straight to your
            doorstep!
          </p>
        </div>
        <div className="btn-group">
          <Button onClick={() => console.log("click")}>view our menu</Button>
          <Button onClick={() => console.log("click")}>
            view custom options
          </Button>
        </div>
      </section>
    </Main>
  );
}

export default Home;
