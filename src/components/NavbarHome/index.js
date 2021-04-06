import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
import signInReducer from "../../redux/reducer/signInReducer"


class Navbar extends Component {
  render() {
    console.log(this.props.credential);
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
<<<<<<< HEAD
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/dangnhap"
              >
                Đăng nhập
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/dangky"
              >
                Đăng ký
              </NavLink>
            </li>
=======

          <ul className="navbar-nav">

            {this.props.credential ? (

              <li className="nav-item">
                <span className="nav-link">Hi,{this.props.credential.hoTen}</span>
              </li>) : (<>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "red" }}
                    to="/signup"
                    className="nav-link"
                  >
                    Đăng ký
              </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "red" }}
                    to="/dangnhap"
                    className="nav-link"
                  >
                    Đăng nhập
              </NavLink>
                </li>
              </>
            )
            }
>>>>>>> tuan
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credential: state.signInReducer.credential
  };
};

export default connect(mapStateToProps, null)(Navbar);