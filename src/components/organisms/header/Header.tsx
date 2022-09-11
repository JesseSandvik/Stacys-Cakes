import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header(): React.ReactElement {
  return (
    <header>
      <nav>
        <ul className="Header-left-list">
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">gallery</NavLink>
          </li>
        </ul>
        <div className="Header-center-logo">
          <NavLink to="/">
            <span className="title">Stacy&apos;s Cakes</span>{" "}
            <span className="location">New York</span>
          </NavLink>
        </div>
        <ul className="Header-right-list">
          <li>
            <NavLink to="/menu">menu</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
