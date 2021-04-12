import React, { useEffect } from "react";
import { actDetailMovieApi } from "../../../redux/actions/QuanLyPhimAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../components/Loader";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";

export default function DetailMovie() {
  const dispatch = useDispatch();
  //Lay tham so tu url
  const { id } = useParams();

  const { loading } = useSelector((state) => state.QuanLyPhimReducer);
  console.log(loading);

  const { chiTietPhim } = useSelector((state) => state.QuanLyPhimReducer);

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
        <div className="col-6">
          <img
            className="mt-5"
            src={chiTietPhim.hinhAnh}
            style={{ width: 300, height: 150 }}
            alt=""
          />
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô tả</th>
                <th>{chiTietPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col-4" style={{ backgroundColor: "white" }}>
          LỊCH CHIẾU
        </div>
        <div className="col-4" style={{ backgroundColor: "white" }}>
          THÔNG TIN
        </div>
        <div className="col-4" style={{ backgroundColor: "white" }}>
          ĐÁNH GIÁ
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <span className="display-4">THÔNG TIN LỊCH CHIẾU</span>
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
                                  <NavLink
                                    to={
                                      "/chitietPhongVe/" + lichChieu.maLichChieu
                                    }
                                    key={index}
                                    className="btn btn-success mr-2"
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
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
