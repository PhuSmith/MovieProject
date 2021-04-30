import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./styles.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Col>
        <div className="movie__item item">
          <Link to={`/detail/${movie.maPhim}`}>
            <img src={movie.hinhAnh} alt="" height={318} width={215} />
          </Link>
          <div>
            <span>{movie.tenPhim}</span>
          </div>
          <Link to={`/detail/${movie.maPhim}`}>
            <button>MUA VÉ</button>
          </Link>
          <div
            className="Trailer"
            onClick={() => {
              // dispatch(
              //   sharedActions.actViewTrailer(getIdVideoTrailer(videoTrailer))
              // );
              // dispatch(sharedActions.actIsOpenVideoTrailer(true));
            }}
          >
            <PlayArrowIcon />
          </div>
        </div>
      </Col>

      // {/* <Col>

      //   <div className="card">
      //     <img
      //       className="card-img-top"
      //       height={300}
      //       src={movie.hinhAnh}
      //       alt=""
      //     />
      //     <div className="card-body">
      //       <b className="card-title">{movie.tenPhim}</b>
      //       <p className="card-text">{movie.moTa.substr(0, 20) + "..."}</p>
      //     </div>
      //     <div className="movieComing_content_text_hover">
      //       <Link className="btn btn-success" to={`/detail/${movie.maPhim}`}>
      //         Mua vé
      //       </Link>
      //     </div>
      //   </div>
      // </Col> */}
    );
  }
}
