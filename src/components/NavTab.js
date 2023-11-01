import React from "react";
import { Link } from "react-router-dom";

const NavTab = () => {
  return (
    <div>
      <div class="tab-container">
        <Link className="link-underline" id="about" to="/about">about.</Link>
        <Link className="link-underline" id="works" to="/works">things i've done.</Link>
        <Link className="link-underline" id="gallery" to="/gallery">gallery.</Link>
        <Link className="link-underline" id="contact" to="/contact">get in touch.</Link>
      </div>
      <div id="line-container" />
    </div>
  );
};

export default NavTab;
