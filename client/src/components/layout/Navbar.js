import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
const Navbar = () => {
  return (
    <Fragment>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to="/" className="nav-title">
            MGN
          </Link>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/register" className="a nav-signup-btn">
            SIGN UP
          </Link>

          <Link to="/login" className="a nav-login-btn">
            LOGIN
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
