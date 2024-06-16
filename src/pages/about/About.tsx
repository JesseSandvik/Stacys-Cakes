import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import Main from "../../components/organisms/main/Main";

import CartoonStacy from "../../images/cartoon-stacy.jpeg";
import "./About.css";

function About(): React.ReactElement {
  return (
    <Main id="about">
      <Heading level={1}>About Stacy&apos;s Cakes</Heading>
      <div id="about-img">
        <Image alt="a cartoon representation of Stacy" src={CartoonStacy} />
      </div>
      <section id="about-body">
        <p>
          Welcome to <em>Stacy&apos;s Cakes New York</em>, where we specialize
          in creating{" "}
          <strong>delicious and visually stunning baked goods</strong> for any
          occasion! <em>Stacy&apos;s Cakes New York</em> is owned and operated
          by Stacy herself, who takes <em>great pride</em> in using only the
          <strong> highest quality ingredients</strong>. Stacy bakes
          <strong> everything from scratch</strong> to ensure that her customers
          receive only the <em>freshest</em> and <em>most delicious</em> baked
          goods.
        </p>
        <p>
          At <em>Stacy&apos;s Cakes New York</em>, we offer a wide variety of
          goodies, including <strong>cakes, cupcakes, cookies, and pies</strong>
          . Our cakes come in a <em>range of sizes</em>, from small individual
          servings to large celebration cakes that can serve up to 20 people or
          more! We can customize your cake to <em>suit any occasion</em>,
          whether it&apos;s a{" "}
          <strong>wedding, birthday, or any other special event</strong>.
        </p>
        <p>
          Our cupcakes are the perfect addition to any party or gathering. We
          have a <strong>variety of flavors</strong> to choose from, including
          classic <em>vanilla</em> and <em>chocolate</em>, as well as offering
          more unique flavors like <em>red velvet</em> and{" "}
          <em>Stacy&apos;s famous carrot cake</em>. Stacy even offers a variety
          of <strong>custom flavor options</strong> and combinations to choose
          from!
        </p>
        <p>
          It&apos;s obvious that{" "}
          <strong>Stacy bakes with passion and skill</strong>, and aims to
          impress with <em>each and every bite</em>. She is meticulous in
          preparing each item, and{" "}
          <strong>refuses to deliver anything less than exceptional</strong>.
        </p>
        <p>
          We invite you to come and{" "}
          <em>Experience The Magic of Stacy&apos;s Cakes New York</em>, so{" "}
          <strong>place your order today</strong> and indulge in the{" "}
          <em>sweetest</em> treats on Long Island!
        </p>
      </section>
    </Main>
  );
}

export default About;
