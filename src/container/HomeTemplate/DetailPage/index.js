import React, { useEffect } from "react";
import { actDetailMovieApi } from "../../../redux/actions/QuanLyPhimAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../components/Loader";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import * as localStorageUtils from "../../../utils/localStorage";
import getIdVideoTrailer from "../../../utils/getIdVideoTrailer";
import * as sharedActions from "../../../redux/actions/sharedActions";
import playButton from "../../../assets/images/play-video.png";
import "./styles.css";
export default function DetailMovie() {
  const dispatch = useDispatch();
  //Lay tham so tu url
  const { id } = useParams();
  const history = useHistory();
  const { loading } = useSelector((state) => state.QuanLyPhimReducer);

  const { chiTietPhim } = useSelector((state) => state.QuanLyPhimReducer);
  let username = null;
  if (localStorageUtils.fetchFromStorage("credential")) {
    username = localStorageUtils.fetchFromStorage("credential").taiKhoan;
  }

  useEffect(() => {
    //Goi action Api tu redux
    dispatch(actDetailMovieApi(id));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      {/* <img
        className="img-fluid"
        src={chiTietPhim.hinhAnh}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
          position: "fixed",
        }}
      /> */}
      {/* <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
        }}
      ></div> */}
      <div className="row">
        <div className="col-6 movie__item">
          <img
            className="mt-5"
            src={chiTietPhim.hinhAnh}
            style={{ width: 300, height: 150 }}
            alt=""
          />
          <div
            className="Trailer"
            onClick={() => {
              dispatch(
                sharedActions.actViewTrailer(
                  getIdVideoTrailer(chiTietPhim.trailer)
                )
              );
              dispatch(sharedActions.actIsOpenVideoTrailer(true));
            }}
          >
            <img className="w-100" src={playButton} alt="play-button" />
          </div>
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>T??n Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>M?? t???</th>
                <th>{chiTietPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col-4" style={{ backgroundColor: "white" }}>
          L???CH CHI???U
        </div>
        <div className="col-4" style={{ backgroundColor: "white" }}>
          TH??NG TIN
        </div>
        <div className="col-4" style={{ backgroundColor: "white" }}>
          ????NH GI??
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <span className="display-4">TH??NG TIN L???CH CHI???U</span>
          <div className="row">
            <div
              className="nav flex-column nav-pills col-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let active = index === 0 ? "active" : "";
                return (
                  <a
                    key={index}
                    className={"nav-link" + active}
                    id={heThongRap.maHeThongRap + "-tab"}
                    data-toggle="pill"
                    href={"#" + heThongRap.maHeThongRap}
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <img
                      src={heThongRap.logo}
                      alt={heThongRap.logo}
                      style={{ width: 50, height: 50 }}
                    />
                  </a>
                );
              })}
            </div>
            <div className="tab-content col-9" id="v-pills-tabContent">
              {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                let active = index === 0 ? "active" : "";
                return (
                  <div
                    key={index}
                    className={"tab-pane fade show " + active}
                    id={heThongRap.maHeThongRap}
                    role="tabpanel"
                    aria-labelledby={heThongRap.maHeThongRap + "-tab"}
                  >
                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div key={index}>
                          <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                            {cumRap.tenCumRap}
                          </p>
                          <div className="row">
                            {cumRap.lichChieuPhim
                              ?.slice(0, 12)
                              .map((lichChieu, index) => {
                                return (
                                  <button
                                    className="btn btn-success"
                                    onClick={() => {
                                      if (localStorage.getItem("credential")) {
                                        history.push(
                                          `/chitietPhongVe/${lichChieu.maLichChieu}`
                                        );
                                      } else {
                                        history.push("/dangNhap");
                                      }
                                    }}
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}{" "}
                                  </button>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
