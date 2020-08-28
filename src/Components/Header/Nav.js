import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navigation">
      <Link to="/">
        <button className="navBtn">Home</button>
      </Link>
      <Link to="/about">
        <button className="navBtn">About</button>
      </Link>
      <Link to="/projects">
        <button className="navBtn">Projects</button>
      </Link>
    </div>
  );
}

export default Nav;
