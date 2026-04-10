import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <h3>Google</h3>
      <div id="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
