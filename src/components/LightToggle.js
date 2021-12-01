import React, { useState } from "react";

const lightMode = localStorage.getItem("darkMode");

const LightToggle = () => {
  const [bgLight, setLight] = useState(lightMode);
  const lightHandler = (
      
  ) => {};

  return (
    <button class="lightToggle" onClick={lightHandler}>
      <svg id="sun" style={{ width: "35px" }} viewBox="0 0 24 24">
        <path d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />
      </svg>
      <svg id="line" style={{ width: "35px" }} viewBox="0 0 24 24">
        <path d="M11 21H9V3H11V21M15 3H13V21H15V3Z" />
      </svg>
      <svg id="moon" style={{ width: "35px" }} viewBox="0 0 24 24">
        <path d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
      </svg>
    </button>
  );
};

export default LightToggle;
