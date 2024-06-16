import React from "react";

import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import Main from "../../components/organisms/main/Main";

import CarrotCake from "../../images/cake-carrot.jpg";
import "./Menu.css";

function Menu(): React.ReactElement {
  return (
    <Main id="menu">
      <Heading level={1}>Menu</Heading>
      <section id="menu-left-panel">
        <Heading level={2}>cakes</Heading>
        <dl id="size-list">
          <dt>Servings per cake:</dt>
          <dd>6 inch cakes serve up to 10 people</dd>
          <dd>8 inch cakes serve up to 20 people</dd>
        </dl>
        <ul>
          <li>
            <div className="menu-card">
              <Image alt="Stacy's Famous Carrot Cake" src={CarrotCake} />
              <div className="menu-card-title">
                <Heading level={4}>Stacy&apos;s Famous Carrot Cake</Heading>
              </div>
              <div className="menu-card-description">
                <p>
                  Stacy&apos;s famous rich spiced cake is loaded with nuts,
                  raisins, and more! She tops it off with a delightful cream
                  cheese frosting that perfectly compliments this delicious
                  masterpiece!
                </p>
                <span id="prices">
                  <p>6 Inch Cake: $15</p>
                  <p>8 Inch Cake: $30</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card">
              <Image alt="Stacy's Famous Carrot Cake" src={CarrotCake} />
              <div className="menu-card-title">
                <Heading level={4}>Four-Layer Chocolate Cake</Heading>
              </div>
              <div className="menu-card-description">
                <p>
                  Indulge in our decadent four-layer chocolate cake with
                  chocolate icing. This one is a classic for a reason.
                </p>
                <span id="prices">
                  <p>6 Inch Cake: $15</p>
                  <p>8 Inch Cake: $30</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card">
              <div className="menu-card-img">
                <Image alt="Stacy's Famous Carrot Cake" src={CarrotCake} />
              </div>
              <div className="menu-card-title">
                <Heading level={4}>Four-Layer Cookies & Cream Cake</Heading>
              </div>
              <div className="menu-card-description">
                <p>
                  Our four-layer chocolate cake, stuffed with cookies and cream
                  filling between each layer, & topped off with chocolate cookie
                  crumbs. You won&apos;t regret this one, trust me.
                </p>
                <span id="prices">
                  <p>6 Inch Cake: $15</p>
                  <p>8 Inch Cake: $30</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card">
              <div className="menu-card-img">
                <Image alt="Stacy's Famous Carrot Cake" src={CarrotCake} />
              </div>
              <div className="menu-card-title">
                <Heading level={4}>Triple Chocolate Mousse Cake</Heading>
              </div>
              <div className="menu-card-description">
                <p>
                  We start this one with a layer of flourless chocolate cake.
                  Next comes a layer of dark chocolate mousse, then a layer of
                  white chocolate mousse, & finally whipped cream! Surrounded by
                  chocolate cream filled cookie sticks. Yes. This is as good as
                  it sounds.
                </p>
                <span id="prices">
                  <p>6 Inch Cake: $18</p>
                  <p>10 Inch Cake: $35</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card">
              <Image alt="Stacy's Famous Carrot Cake" src={CarrotCake} />
              <div className="menu-card-title">
                <Heading level={4}>Tiramisu Cake</Heading>
              </div>
              <div className="menu-card-description">
                <p>
                  Classic yellow cake with coffee flavored marscapone filling,
                  covered in whipped cream and dusted with cocoa powder. Enjoy
                  with you favorite cup of coffee or espresso.
                </p>
                <span id="prices">
                  <p>6 Inch Cake: $15</p>
                  <p>8 Inch Cake: $30</p>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card">
              <Image alt="Stacy's Famous Carrot Cake" src={CarrotCake} />
              <div className="menu-card-title">
                <Heading level={4}>Strawberry Short Cake (seasonal)</Heading>
              </div>
              <div className="menu-card-description">
                <p>
                  Four layers of classic yellow cake with fresh strawberry
                  filling, covered in whipped cream and topped off with fresh
                  strawberries. A light, refreshing dessert for the warmer
                  weather!
                </p>
                <span id="prices">
                  <p>6 Inch Cake: $15</p>
                  <p>8 Inch Cake: $30</p>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="menu-right-panel">
        <Heading level={2}>pies</Heading>
        <dl id="size-list">
          <dt>Servings per cake:</dt>
          <dd>All pies are 9&quot; deep dish</dd>
        </dl>
      </section>
    </Main>
  );
}

export default Menu;

//     Apple Pumpkin Cherry Lemon Meringue(seasonal) Key Lime
//     (seasonal) $12 Pumpkin Pecan(seasonal) Chocolate Chip Apple
//             Cranberry Almond Crumb Blueberry Walnut Crumb $16 COOKIES: 2 dozen
//             per order Chocolate Chip Oatmeal Raisin Peanut Butter Sugar Snicker
//             doodle White Chocolate Cranberry Oatmeal Butterscotch $14 Death by
//             Chocolate Peanut Butter Cup Seven Layer Bars Caramel Oat Bars Dark
//             Chocolate Brownies Red Velvet Brownies $18 BREADS and PASTRIES
//             Banana Bread Loaded with chocolate chips! Apple Butter Banana Bread
//             Loaf topped with Streusel Nut topping $8 Crumb Cake NY style of
//   course! Moist and delicate cake with Tons! Of crumbs! $14 Flour less
//             Chocolate Cake More like a brownie but lighter in texture.Topped
//   with fresh whipped cream and more chocolate! $14
//           </p > * /
//
