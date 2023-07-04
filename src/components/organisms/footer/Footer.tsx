import React from "react";

import "./Footer.css";

function Footer(): React.ReactElement {
  return (
    <footer>
      <small className="Footer-copyright">
        &copy; blck<span className="bold">root</span> {new Date().getFullYear()}
      </small>
    </footer>
  );
}

export default Footer;
