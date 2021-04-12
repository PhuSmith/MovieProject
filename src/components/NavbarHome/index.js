
import { NavLink, Link, useHistory } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
import { Nav, NavDropdown, Dropdown } from "react-bootstrap";
import HomePage from "../../container/HomeTemplate/HomePage";
import HomeTemplate from "../../container/HomeTemplate"
import { Component } from "react";
import { actSignIn } from "../../redux/actions/act"
class Navbar extends Component {
  logOut = () => {
    const credentials = localStorage.getItem('credential');
    localStorage.clear();
    if (credentials) {
      this.props.dispatch(
        actSignIn(null)
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md" id="header">

        <Link className="navbar-brand" to="" className="logo">
          <img src="./images/web-logo.png" alt="" />
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
          </ul>

          <ul className="navbar-nav">
            {this.props.credential ? (
              <>
                <li className="nav-item">
                  <Dropdown>
                    <Dropdown.Toggle style={{padding: "2px"}} variant="success" id="dropdown-basic">
                      {this.props.credential.hoTen}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={this.logOut} >Đăng xuất</Dropdown.Item>
                      <Dropdown.Item >Cập nhật thông tin</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </>


            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "red" }}
                    to="/dangky"
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
            )}
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
