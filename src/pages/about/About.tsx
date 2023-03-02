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
      <div className="About-body">
        <section>
          <article id="intro">
            <p>
              Welcome to Stacy&apos;s Cakes, where we specialize in creating
              delicious and visually stunning baked goods for any occasion!
              Stacy&apos;s Cakes is owned and operated by Stacy herself, who
              takes great pride in using only the highest quality ingredients.
              Stacy bakes everything from scratch to ensure that her customers
              receive only the freshest and most delicious baked goods.
            </p>
            <p>
              At Stacy&apos;s Cakes, we offer a wide variety of goodies,
              including cakes, cupcakes, cookies, and pies. Our cakes come in a
              range of sizes, from small individual servings to large
              celebration cakes that can serve up to 20 people or more! We can
              customize your cake to suit any occasion, whether it&apos;s a
              wedding, birthday, or any other special event.
            </p>
            <p>
              Our cupcakes are the perfect addition to any party or gathering.
              We have a variety of flavors to choose from, including classic
              vanilla and chocolate, as well as offering more unique flavors
              like red velvet and Stacy&apos;s famous carrot cake. We also offer
              a selection of vegan and gluten-free options to ensure that
              everyone can enjoy our baked goods.
            </p>
            <p>
              Stacy takes great pride in baking her masterpieces, and aims to
              impress each and every time. She takes great care in preparing
              each item, ensuring that every bite is an absolute delight. We
              invite you to come and experience the magic of Stacy&apos;s Cakes,
              so place your order today and indulge in the sweetest treats in
              town!
            </p>
          </article>
        </section>
      </div>
    </Main>
  );
}

export default About;
