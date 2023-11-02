import React from "react";
import { Link } from "react-router-dom";

const NavTab = () => {
  return (
    <div>
      <div className="tab-container">
        <Link className="link-underline" id="about" to="/about">about me.</Link>
        <Link className="link-underline" id="works" to="/works">what i've worked on.</Link>
        <Link className="link-underline" id="gallery" to="/gallery">gallery.</Link>
        <Link className="link-underline" id="contact" to="/contact">get in touch.</Link>
      </div>
      {/* <div id="line-container" /> */}
    </div>
  );
};

export default NavTab;
