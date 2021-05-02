import React, { useEffect } from "react";

import {
  actListTheatersApi,
  actMaHeThongRap,
} from "../../redux/actions/QuanLyRapAction";
import "./styles.css";
import TheaterDetail from "../TheaterDetail/TheaterDetail";
import moment from "moment";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function ListTheaters() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, dsRap } = useSelector((state) => state.QuanLyRapReducer);
  useEffect(() => {
    dispatch(actListTheatersApi());
  }, []);

  const maHeThongRap = (data) => {
    dispatch(actMaHeThongRap(data));
  };

  return (
    <div className="mt-5">
      <div className="row flex-md-row flex-column">
        <div className="nav nav-tabs theaterList__logos flex-md-column">
          {data?.map((heThongRap, index) => {
            let active = index === 0 ? "active" : "";

            return (
              <div
                className={"logo__wrapper " + active}
                data-toggle="tab"
                role="tab"
                data-target={"#" + heThongRap.maHeThongRap}
              >
                <div
                  key={index}
                  className="logo__detail"
                  onClick={() => {
                    maHeThongRap(heThongRap.maHeThongRap);
                  }}
                >
                  <img
                    src={heThongRap.logo}
                    alt={heThongRap.maHeThongRap}
                    style={{ width: 50, height: 50 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="tab-content theaterList__details">
          <TheaterDetail />
        </div>
        <div className="tab-content theaterList__movies">
          {dsRap?.map((rap, index) => {
            return rap.lstCumRap.map((cumRap, index) => {
              let active = index === 0 ? "active" : "";

              return (
                <div
                  className={"tab-pane fade show " + active}
                  id={cumRap.maCumRap}
                >
                  {cumRap.danhSachPhim.map((phim, index) => {
                    let active = index === 0 ? "active" : "";

                    return (
                      <div className="wrapper__collapse">
                        <div
                          className="main__collapse"
                          data-toggle="collapse"
                          data-target={
                            "#" + cumRap.maCumRap + "_" + phim.maPhim
                          }
                        >
                          <img
                            className="theaterList__image"
                            src={phim.hinhAnh}
                            alt={phim.tenPhim}
                          />
                          <div className="wrapInfo">
                            <span className="movieName">
                              <span className="ageType">C13</span>
                              <span className="movieTitle">{phim.tenPhim}</span>
                            </span>
                            <span className="movieDetail">
                              116 phút - TIX 8.6 - IMDb 0
                            </span>
                          </div>
                        </div>
                        <div
                          className="collapse show"
                          id={cumRap.maCumRap + "_" + phim.maPhim}
                        >
                          <div className="pt-3 row content__collapse stack">
                            <div className="col-12 digital">2D Digital</div>
                            <div className="col-12">
                              {phim.lstLichChieuTheoPhim.map(
                                (gioChieu, index) => {
                                  return (
                                    <button
                                      className="btn btn-time"
                                      onClick={() => {
                                        if (
                                          localStorage.getItem("credential")
                                        ) {
                                          history.push(
                                            `/chitietPhongVe/${gioChieu.maLichChieu}`
                                          );
                                        } else {
                                          history.push("/dangNhap");
                                        }
                                      }}
                                    >
                                      <span className="start">
                                        {moment(
                                          gioChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}{" "}
                                      </span>
                                    </button>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}
