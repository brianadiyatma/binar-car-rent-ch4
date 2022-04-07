import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light lb-bg">
      <div className="logo  mx-5"></div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul
          className="navbar-nav"
          style={{ marginRight: "136px", marginLeft: "auto" }}
        >
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link nav-text"
              style={{ color: "black", fontWeight: 540 }}
            >
              Our Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link nav-text"
              style={{ color: "black", fontWeight: 540 }}
            >
              Why Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link nav-text"
              style={{ color: "black", fontWeight: 540 }}
            >
              Testimonials
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link nav-text"
              style={{ color: "black", fontWeight: 540 }}
            >
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="btn-register">
              <NavLink
                to="/"
                className="nav-link white-text"
                style={{ color: "white" }}
              >
                Register
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
