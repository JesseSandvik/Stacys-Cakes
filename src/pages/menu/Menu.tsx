import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import Main from "../../components/organisms/main/Main";

import CarrotCake from "../../images/cake-carrot.jpg";
import "./Menu.css";

function Menu(): React.ReactElement {
  return (
    <Main className="Menu">
      <div className="Menu-heading">
        <Heading level={1}>Menu</Heading>
      </div>
      <div className="Menu-body">
        <section>
          <Heading level={2}>cakes</Heading>
          <dl className="cake-size-list">
            <dt>Servings per cake:</dt>
            <dd>6 inch cakes serves up to 10 people</dd>
            <dd>8 inch cakes serves up to 20 people</dd>
          </dl>
          <div className="Menu-card">
            <div className="Menu-card-img">
              <Image alt="Stacy's Famous Carrot Cake" src={CarrotCake} />
            </div>
            <div className="Menu-card-title">
              <Heading level={4}>Stacy&apos;s Famous Carrot Cake</Heading>
            </div>
            <div className="Menu-card-description">
              <p>
                Stacy&apos;s famous rich spiced cake is loaded with nuts,
                raisins, and more! She tops it off with a delightful cream
                cheese frosting that perfectly compliments this delicious
                masterpiece!
              </p>
              <span className="Menu-card-description-prices">
                <p>6 Inch Cake: $15</p>
                <p>8 Inch Cake: $30</p>
              </span>
            </div>
          </div>
          <dl>
            <dt>Four-Layer Chocolate Cake</dt>
            <dd>
              <strong>attention all chocoholics!</strong>
            </dd>
            <dd>
              Indulge in our decadent four-layer chocolate cake with chocolate
              icing, a mouth-watering dessert that will satisfy even the most
              intense chocolate cravings.
            </dd>
            <dd>6 Inch Four-Layer Chocolate Cake - $15</dd>
            <dd>8 Inch Four-Layer Chocolate Cake - $30</dd>
          </dl>
        </section>
      </div>
    </Main>
  );
}

export default Menu;

{
  /* <dl>
            <dt>Four-Layer Cookies & Cream Cake</dt>
            <dt>the best of both worlds!</dt>
            <dd />
          </dl>
          <p>
            Cookies and Cream Cake Four layers of chocolate cake layered with
            cookies and cream filling. Surrounded by chocolate cookie crumbs.
            8″- $30 ~ 6″- $15 Triple Chocolate Mousse Cake Starts with a layer
            of flour less chocolate cake, next comes a dark chocolate mousse
            layer, next a white chocolate mousse layer, then whipped cream!
            Surrounded by chocolate cream filled cookie sticks. 10″- $35 ~ 6″-
            $18 Tiramisu Cake Yellow cake, coffee flavored marscapone filling,
            covered in whipped cream and dusted with cocoa powder. 8″- $30 ~ 6″-
            $15 Strawberry Short Cake (seasonal) Four layers of yellow cake,
            fresh strawberry filling, covered in whipped cream and more fresh
            strawberries. Red Velvet Cake 8″- $30 ~ 6″- $15 Coconut Cake Yellow
            cake layered with vanilla frosting and lots of coconut! 8″- $25 ~
            6″-$12 Chocolate Nutella Cake Chocolate cake layered with Nutella
            buttercream frosting. 8″ – $30 ~ 6″- $15 PIES: All pies are 9″ deep
            dish Apple Pumpkin Cherry Lemon Meringue (seasonal) Key Lime
            (seasonal) $12 Pumpkin Pecan (seasonal) Chocolate Chip Apple
            Cranberry Almond Crumb Blueberry Walnut Crumb $16 COOKIES: 2 dozen
            per order Chocolate Chip Oatmeal Raisin Peanut Butter Sugar Snicker
            doodle White Chocolate Cranberry Oatmeal Butterscotch $14 Death by
            Chocolate Peanut Butter Cup Seven Layer Bars Caramel Oat Bars Dark
            Chocolate Brownies Red Velvet Brownies $18 BREADS and PASTRIES
            Banana Bread Loaded with chocolate chips! Apple Butter Banana Bread
            Loaf topped with Streusel Nut topping $8 Crumb Cake NY style of
            course! Moist and delicate cake with Tons! Of crumbs! $14 Flour less
            Chocolate Cake More like a brownie but lighter in texture. Topped
            with fresh whipped cream and more chocolate! $14
          </p> */
}
