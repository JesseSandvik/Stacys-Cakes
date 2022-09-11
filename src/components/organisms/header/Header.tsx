import React from "react";
import { NavLink } from "react-router-dom";

function Header(): React.ReactElement {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">gallery</NavLink>
          </li>
        </ul>
        <NavLink to="/">Stacy&apos;s Cakes New York</NavLink>
        <ul>
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
