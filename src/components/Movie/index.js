import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./styles.css";
export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Col>
        <div className="card">
          <img
            className="card-img-top"
            height={300}
            src={movie.hinhAnh}
            alt=""
          />
          <div className="card-body">
            <b className="card-title">{movie.tenPhim}</b>
            <p className="card-text">{movie.moTa.substr(0, 20) + "..."}</p>
          </div>
          <div className="movieComing_content_text_hover">
            <Link className="btn btn-success" to={`/detail/${movie.maPhim}`}>
              Mua vé
            </Link>
          </div>
        </div>
      </Col>
    );
  }
}
