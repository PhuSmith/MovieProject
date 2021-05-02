import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import logo from "./../../assets/images/logo.png";
import avatar from "./../../assets/images/avatar.png";
import { connect } from "react-redux";
import Countries from "../ComboCountries";
import { Dropdown } from "react-bootstrap";
import { Component, Fragment } from "react";
import { actSignIn } from "../../redux/actions/act";
class Navbar extends Component {
  logOut = () => {
    const credentials = localStorage.getItem("credential");
    localStorage.clear();
    if (credentials) {
      this.props.dispatch(actSignIn(null));
    }
  };
  showInfo = () => {
    const { credential } = this.props;

    return credential === null ? (
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/dangnhap" className="nav-link">
            <img className="avatar-img" src={avatar} alt="avatar" />
            Đăng nhập
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dangky" className="nav-link">
            Đăng ký
          </Link>
        </li>
      </ul>
    ) : (
      <>
        <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle
              style={{ padding: "2px" }}
              variant="success"
              id="dropdown-basic"
            >
              {this.props.credential?.hoTen}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.logOut}>Đăng xuất</Dropdown.Item>
              <Dropdown.Item>Cập nhật thông tin</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </>
    );
  };

  render() {
    return (
      <header id="header">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="header__menu">
          <ul>
            <li>
              <Link href="#">Lịch chiếu</Link>
            </li>
            <li>
              <a href="#">Cụm rạp</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Ứng dụng</a>
            </li>
          </ul>
        </nav>
        <Fragment>{this.showInfo()}</Fragment>
      </header>

      // <nav
      //   className="navbar navbar-expand-md justify-content-between"
      //   id="header"
      // >
      //   <Link className="navbar-brand" to="/" className="logo">
      //     <img src={logo} alt="" />
      //   </Link>
      //   <div
      //     className="collapse navbar-collapse"
      //     id="collapsibleNavbar"
      //     className="header__menu"
      //   >
      //     <ul className="navbar-nav">
      //       <li className="nav-item">
      //         <NavLink
      //           exact
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/"
      //         >
      //           Lịch Chiếu
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/about"
      //         >
      //           Cụm rạp
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/list-movie"
      //         >
      //           Tin tức
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <a activeClassName="active" className="nav-link" href="#footer">
      //           Ứng dụng
      //         </a>
      //       </li>
      //       <li>
      //         <Link activeClassName="active" className="nav-link" to="/">
      //           <Countries />
      //         </Link>
      //       </li>
      //       {this.showInfo()}
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credential: state.signInReducer.credential,
  };
};

export default connect(mapStateToProps, null)(Navbar);
