import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const HomeButton = () => {
  const location = useLocation();
  let buttonText = "";

  if (location.pathname != "/") {
    buttonText = "HOME";
  } else {
    buttonText = "";
  }

  return (
    <div>
      <Link to="/">
        <button className="btn-home">{buttonText}</button>
      </Link>
    </div>
  );
};

export default HomeButton;
