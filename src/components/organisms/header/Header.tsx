import React from "react";
import { NavLink } from "react-router-dom";

function Header(): React.ReactElement {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/">Stacy&apos;s Cakes New York</NavLink>
    </header>
  );
}

export default Header;
