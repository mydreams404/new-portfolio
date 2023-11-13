import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let buttonText = "";

  const navigateHome = () => {
    setTimeout(() => {
      navigate("/");
    }); // Adjust to match your exit animation duration
  };

  const isHomePage = location.pathname === "/";
  const btnClass = isHomePage ? "btn-home hidden" : "btn-home";

  return (
    <div>
      <button className={btnClass} onClick={navigateHome}>
      ⌂ <br/>HOME
      </button>
    </div>
  );
};

export default HomeButton;
