import React from "react";
import NavigationLink from "../../atoms/navigationLink/NavigationLink";

import "./Header.css";

function Header(): React.ReactElement {
  return (
    <header>
      <nav>
        <ul className="Header-left-list">
          <li>
            <NavigationLink path="/menu">menu</NavigationLink>
          </li>
          <li>
            <NavigationLink path="/gallery">gallery</NavigationLink>
          </li>
        </ul>
        <div className="Header-center-logo">
          <NavigationLink path="/">
            <span className="title">Stacy&apos;s Cakes</span>{" "}
            <span className="location">New York</span>
          </NavigationLink>
        </div>
        <ul className="Header-right-list">
          <li>
            <NavigationLink path="/about">about</NavigationLink>
          </li>
          <li>
            <NavigationLink path="/contact">contact</NavigationLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
