import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md" id="header">
        {/* Brand */}
        <Link className="navbar-brand" to="" className="logo">
          <img src="./images/web-logo.png" alt="" />
        </Link>
        {/* Toggler/collapsibe Button */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        {/* Navbar links */}
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
          className="header__menu"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                Lịch Chiếu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                Cụm rạp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/list-movie"
              >
                Tin tức
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/hoc">
                Ứng dụng
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
