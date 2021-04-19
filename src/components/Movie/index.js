import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./styles.css";
import playButton from "../../assets/images/play-video.png";
import * as sharedActions from "../../redux/actions/sharedActions";
import { useDispatch } from "react-redux";
import getIdVideoTrailer from "../../utils/getIdVideoTrailer";
function Movie(props) {
  const { hinhAnh, maPhim, tenPhim, videoTrailer } = props;
  const dispatch = useDispatch();
  return (
    <Col>
      <div className="movie__item item">
        <Link to={`/detail/${maPhim}`}>
          <img src={hinhAnh} alt="" height={318} width={215} />
        </Link>
        <div>
          <span>{tenPhim}</span>
        </div>
        <Link to={`/detail/${maPhim}`}>
          <button>MUA VÉ</button>
        </Link>
        <div
          className="Trailer"
          onClick={() => {
            dispatch(
              sharedActions.actViewTrailer(getIdVideoTrailer(videoTrailer))
            );
            dispatch(sharedActions.actIsOpenVideoTrailer(true));
            console.log(dispatch(sharedActions.actIsOpenVideoTrailer(true)));
          }}
        >
          <img className="w-100" src={playButton} alt="play-button" />
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
export default Movie;
