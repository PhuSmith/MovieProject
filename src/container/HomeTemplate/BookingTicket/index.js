import React, { useEffect, Fragment } from "react";
import "./styles.css";
import screen from "../../../assets/images/screen.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  layThongTinPhongVeApiAction,
  datGheAction,
  actDatVeApi,
} from "../../../redux/actions/QuanLyPhimAction";
import * as localStorageUtils from "../../../utils/localStorage";

export default function BookingTicket() {
  const dispatch = useDispatch();
  const thongTinPhongVe = useSelector(
    (state) => state.QuanLyPhimReducer.thongTinPhongVe
  );

  const danhSachGheDangDat = useSelector(
    (state) => state.QuanLyPhimReducer.danhSachGheDangDat
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(layThongTinPhongVeApiAction(id));
  }, []);

  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <div className="manHinh mt-5 mb-2">
                <img src={screen} alt="" />
              </div>
              <div className="danhSachGhe">
                {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                  let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
                  let classGheDaDat = ghe.daDat ? "gheDaDat" : "";
                  let noiDung = ghe.daDat ? "X" : ghe.stt;
                  let disabled = ghe.daDat ? "disable" : "";
                  let datVe = "datVe";
                  let indexGheDangDat = danhSachGheDangDat.findIndex(
                    (gheDangDat) => ghe.maGhe === gheDangDat.maGhe
                  );
                  let classGheDangDat =
                    indexGheDangDat !== -1 ? "gheDangDat" : "";
                  return (
                    <Fragment key={index}>
                      <button
                        onClick={() => {
                          dispatch(datGheAction(ghe.maGhe, ghe.giaVe, ghe.stt));
                        }}
                        disabled={disabled}
                        className={`ghe ${classGheVip}  ${classGheDaDat} ${classGheDangDat} `}
                      >
                        {noiDung}
                      </button>
                      {(index + 1) % 16 === 0 ? <br /> : ""}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="col-4">
              <div
                className="text-center"
                style={{
                  fontSize: "35px",
                  color: "#44c020",
                  fontWeight: "600",
                }}
              >
                {danhSachGheDangDat
                  .reduce((tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                đ
              </div>
              <hr />
              <span>{thongTinPhongVe.thongTinPhim?.tenPhim}</span>
              <p>{thongTinPhongVe.thongTinPhim?.tenCumRap}</p>
              <p>
                {thongTinPhongVe.thongTinPhim?.ngayChieu} -{" "}
                {thongTinPhongVe.thongTinPhim?.gioChieu} -{" "}
                {thongTinPhongVe.thongTinPhim?.tenRap}
              </p>
              <hr />
              <div className="row">
                <div className="col-7" style={{ color: "red" }}>
                  Ghế
                  {danhSachGheDangDat.map((gheDangDat, index) => {
                    return (
                      <span style={{ fontSize: 14 }} key={index}>{` ${
                        gheDangDat.stt
                      }${","}`}</span>
                    );
                  })}
                </div>
                <div
                  className="text-center col-5"
                  style={{
                    fontSize: "14px",
                    color: "#44c020",
                    fontWeight: "600",
                  }}
                >
                  {danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.giaVe);
                    }, 0)
                    .toLocaleString()}{" "}
                  đ
                </div>
              </div>

              <hr />
              <button
                className="btn btn-success w-100 p-3 datVe"
                disabled={danhSachGheDangDat.length < 1 ? "disabled" : null}
                style={{ fontSize: 25 }}
                onClick={() => {
                  const {
                    taiKhoan,
                    accessToken,
                  } = localStorageUtils.fetchFromStorage("credential");
                  let objDatVe = {
                    maLichChieu: id,
                    danhSachVe: danhSachGheDangDat,
                    taiKhoanNguoiDung: taiKhoan,
                  };
                  dispatch(actDatVeApi(objDatVe, accessToken));
                }}
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
