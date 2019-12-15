import React, { Fragment } from "react";
import "../../css/navbar.css";
const Navbar = () => {
  return (
    <Fragment>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">MGN</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="#!">SIGNUP</a>
          <a href="#!">LOGIN</a>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
