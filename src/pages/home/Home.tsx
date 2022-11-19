import React from "react";

import Button from "../../components/atoms/button/Button";
import ExtLink from "../../components/atoms/extlink/ExtLink";
import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import Main from "../../components/organisms/main/Main";
import NavigationLink from "../../components/atoms/navigationLink/NavigationLink";

import WhiteCake from "../../images/cake-white.jpg";
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
            <em>fresh</em> from her kitchen & delivered straight to your
            doorstep!
          </p>
        </div>
        <div className="btn-group">
          <Button className="default-page-btn">view our menu</Button>
          <Button className="default-page-btn">view custom options</Button>
        </div>
        <div className="policy-info">
          <p>Ready to order?</p>
          <p>
            {" "}
            Review our{" "}
            <NavigationLink path="/contact">
              booking policy & contact information
            </NavigationLink>
            .
          </p>
        </div>
      </section>
      <section className="Home-body-notice">
        <p>
          <strong>Now serving Nassau and Suffolk county!</strong>
        </p>
        <div className="Home-body-notice-social-icons">
          <ExtLink
            className="social-icon-link"
            href="mailto: stacyscakesny@gmai.com"
            rel="noopener noreferrer"
            target="_blank"
            title="email"
          >
            <i className="fa-solid fa-square-envelope" />
          </ExtLink>
          <ExtLink
            className="social-icon-link"
            href="https://www.facebook.com/stacyscakesandcupcakes"
            rel="noopener noreferrer"
            target="_blank"
            title="Facebook"
          >
            <i className="fa-brands fa-square-facebook" />
          </ExtLink>
          <ExtLink
            className="social-icon-link"
            href="https://www.instagram.com/stacyscakesny"
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
          >
            <i className="fa-brands fa-instagram-square" />
          </ExtLink>
        </div>
      </section>
      <section className="Home-body-image-container">
        <Image alt="Ornate white frosted cake" src={WhiteCake} />
      </section>
    </Main>
  );
}

export default Home;
