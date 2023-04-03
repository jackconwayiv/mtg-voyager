import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> |<Link to="/new">New Game</Link> |{" "}
      <Link to="/records">Records</Link> | <Link to="/rules">Rules</Link> |{" "}
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
