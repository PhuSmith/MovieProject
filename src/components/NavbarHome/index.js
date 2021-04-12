import { NavLink, Link, useHistory } from "react-router-dom";
import "./styles.css";
import logo from "./../../assets/images/logo.png";
import { connect } from "react-redux";
import Countries from "../ComboCountries";

import { Nav, NavDropdown, Dropdown } from "react-bootstrap";
import HomePage from "../../container/HomeTemplate/HomePage";
import HomeTemplate from "../../container/HomeTemplate";
import { Component } from "react";
import { actSignIn } from "../../redux/actions/act";
class Navbar extends Component {
  logOut = () => {
    const credentials = localStorage.getItem("credential");
    localStorage.clear();
    if (credentials) {
      this.props.dispatch(actSignIn(null));
    }
  };

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
