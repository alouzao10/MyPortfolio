import React from "react";

// Import Assets
import "../../Assets/Styles/styleNav.css";

// Import Components
import Nav from "./Nav.js";

function Head() {
  return (
    <div>
      <div className="headerContent">
        <h1>Welcome to my Site!</h1>
        <h3>Learn what I've been up to...</h3>
      </div>
      <Nav />
    </div>
  );
}

export default Head;
