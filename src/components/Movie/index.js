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
          <span style={{ margin: 0 }}>{tenPhim}</span>
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
          }}
        >
          <img className="w-100" src={playButton} alt="play-button" />
        </div>
      </div>
    </Col>
  );
}
export default Movie;
