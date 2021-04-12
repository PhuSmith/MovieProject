import React, { Component } from "react";
import "./styles.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div id="throbber" style={{ display: "none", minHeight: 120 }} />

        <div id="noty-holder" />

        <div id="wrapper">
          <nav
            className="navbar navbar-inverse navbar-fixed-top"
            role="navigation"
          >
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-ex1-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>

            {/* Sidebar Menu Items - These collapse to the responsive navigation menu on small screens */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav side-nav">
                <li>
                  <a href="#" data-toggle="collapse" data-target="#submenu-1">
                    <i className="fa fa-fw fa-search" />
                    DANH SÁCH QUẢN LÍ{" "}
                    <i className="fa fa-fw fa-angle-down pull-right" />
                  </a>
                  <ul id="submenu-1" className="collapse">
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right" /> Quản lí người
                        dùng
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right" /> Quản lí vé
                        phim
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="page-wrapper">
              <div className="container-fluid">
                {/* Page Heading */}
                <div className="row" id="main">
                  <div className="col-sm-12 col-md-12 well" id="content">
                    <h1>Welcome Admin!</h1>
                  </div>
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </div>

            {/* /.navbar-collapse */}
          </nav>
        </div>
      </div>
    );
  }
}
