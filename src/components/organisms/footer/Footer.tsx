import React from "react";

import "./Footer.css";

function Footer(): React.ReactElement {
  return (
    <footer>
      <small className="Footer-copyright">
        &copy; jesse<span className="bold">sandvik</span>{" "}
        {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;
