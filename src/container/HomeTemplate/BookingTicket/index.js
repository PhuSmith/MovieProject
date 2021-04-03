import React, { Component, Fragment } from "react";
import ThongTinDatGhe from "../../../components/ThongTinDatGhe";
import "./styles.css";
import danhSachGheData from "../../../data/danhSachGhe.json";
import HangGhe from "../../../components/HangGhe";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./images/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-dark">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                <img className="mt-5" src="./images/screen.png" />
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <div className="text-dark">DANH SÁCH GHẾ BẠN CHỌN</div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
