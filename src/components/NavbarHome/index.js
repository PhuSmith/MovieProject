import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import logo from "./../../assets/images/logo.png";
import { connect } from "react-redux";
import Countries from "../ComboCountries";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md" id="header">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: "50px" }} />
        </Link>
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
            <li>
              <Link activeClassName="active" className="nav-link" to="/">
                <Countries />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credential: state.signInReducer.credential,
  };
};

export default connect(mapStateToProps, null)(Navbar);
