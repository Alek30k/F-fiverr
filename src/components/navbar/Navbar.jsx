import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a seller</span>
          <span>Sign in</span>
          <button>Join</button>
        </div>
      </div>
      {
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      }
    </div>
  );
};

export default Navbar;
