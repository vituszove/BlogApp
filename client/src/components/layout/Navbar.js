import React, { Fragment, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
const Navbar = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <div>
        <nav className="navbar-fixed">
          <div className="nav-wrapper black">
            <Link to="/" className="brand-logo">
              MGN
            </Link>
            <a href="!#" data-target="mobile-demo" className="sidenav-trigger ">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link
                  to="/register"
                  className="nav-signup-btn deep-orange darken-1"
                >
                  SIGN UP
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-login-btn">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav black" id="mobile-demo">
        <li>
          <Link to="/register" className="sidenav-close white-text">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login" className="sidenav-close white-text">
            Login
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Navbar;
