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
    <Main id="home">
      <section id="home-body">
        <div id="home-body-heading">
          <Heading level={1}>Experience The Magic</Heading>
        </div>
        <div id="home-banner">
          <Heading level={2}>Now Serving Nassau and Suffolk county!</Heading>
        </div>
        <div id="home-body-btns">
          <NavigationLink className="default-page-btn" path="/menu">
            view our menu
          </NavigationLink>
          <NavigationLink className="default-page-btn" path="/gallery">
            view our gallery
          </NavigationLink>
        </div>
        <div id="home-body-contact">
          <Heading level={4}>Ready to order?</Heading>
          <p>
            {" "}
            Review our{" "}
            <NavigationLink path="/contact">
              booking policy & contact information
            </NavigationLink>
          </p>
        </div>
        <div id="home-banner-social-icons">
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
      <section id="home-img">
        <Image alt="Ornate white frosted cake" src={WhiteCake} />
      </section>
    </Main>
  );
}

export default Home;
